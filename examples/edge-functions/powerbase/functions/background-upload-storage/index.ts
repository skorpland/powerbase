import { createClient } from 'jsr:@skorpland/powerbase-js@2.45.6'
import OpenAI from 'https://deno.land/x/openai@v4.68.2/mod.ts'

const client = new OpenAI({ apiKey: Deno.env.get('OPENAI_API_KEY')! })

const powerbase = createClient(
  Deno.env.get('POWERBASE_URL')!,
  Deno.env.get('POWERBASE_SERVICE_ROLE_KEY')!
)

type StorageFileApi = ReturnType<typeof powerbase.storage.from>
type StorageUploadPromise = ReturnType<StorageFileApi['upload']>

class MyBackgroundTaskEvent extends Event {
  readonly taskPromise: StorageUploadPromise

  constructor(taskPromise: StorageUploadPromise) {
    super('myBackgroundTask')
    this.taskPromise = taskPromise
  }
}

globalThis.addEventListener('myBackgroundTask', async (event) => {
  const { data, error } = await (event as MyBackgroundTaskEvent).taskPromise
  console.log({ data, error })
})

Deno.serve(async (req) => {
  const url = new URL(req.url)
  const params = new URLSearchParams(url.search)
  const text = params.get('text')

  if (!text) {
    return new Response(JSON.stringify({ error: 'Text parameter is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  try {
    const response = await client.audio.speech.create({
      model: 'tts-1',
      voice: 'nova',
      input: text,
    })

    const stream = response.body
    if (!stream) {
      throw new Error('No stream')
    }

    // Branch stream to Powerbase Storage
    const [browserStream, storageStream] = stream.tee()

    // Upload to Powerbase Storage
    const storageUploadPromise = powerbase.storage
      .from('videos')
      .upload(`audio-stream_${Date.now()}.mp3`, storageStream, {
        contentType: 'audio/mp3',
      })
    const event = new MyBackgroundTaskEvent(storageUploadPromise)
    globalThis.dispatchEvent(event)

    return new Response(browserStream, {
      headers: {
        'Content-Type': 'audio/mp3',
      },
    })
  } catch (error) {
    console.log('error', { error })
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
})
