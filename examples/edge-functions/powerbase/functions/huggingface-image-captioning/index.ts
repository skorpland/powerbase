import { HfInference } from 'https://esm.sh/@huggingface/inference@2.3.2'
import { createClient } from 'jsr:@skorpland/powerbase-js@2'
import { Database } from './types.ts'

console.log('Hello from `huggingface-image-captioning` function!')

const hf = new HfInference(Deno.env.get('HUGGINGFACE_ACCESS_TOKEN'))

type SoRecord = Database['storage']['Tables']['objects']['Row']
interface WebhookPayload {
  type: 'INSERT' | 'UPDATE' | 'DELETE'
  table: string
  record: SoRecord
  schema: 'public'
  old_record: null | SoRecord
}

Deno.serve(async (req) => {
  const payload: WebhookPayload = await req.json()
  const soRecord = payload.record
  const powerbaseAdminClient = createClient<Database>(
    // Powerbase API URL - env var exported by default when deployed.
    Deno.env.get('POWERBASE_URL') ?? '',
    // Powerbase API SERVICE ROLE KEY - env var exported by default when deployed.
    Deno.env.get('POWERBASE_SERVICE_ROLE_KEY') ?? ''
  )

  // Construct image url from storage
  const { data, error } = await powerbaseAdminClient.storage
    .from(soRecord.bucket_id!)
    .createSignedUrl(soRecord.path_tokens!.join('/'), 60)
  if (error) throw error
  const { signedUrl } = data

  // Run image captioning with Huggingface
  const imgDesc = await hf.imageToText({
    data: await (await fetch(signedUrl)).blob(),
    model: 'nlpconnect/vit-gpt2-image-captioning',
  })

  // Store image caption in Database table
  await powerbaseAdminClient
    .from('image_caption')
    .insert({ id: soRecord.id!, caption: imgDesc.generated_text })
    .throwOnError()

  return new Response('ok')
})
