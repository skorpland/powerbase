import { createClient } from '@skorpland/powerbase-js'

export const powerbase = createClient(
  process.env.NEXT_PUBLIC_POWERBASE_URL ?? '',
  process.env.NEXT_PUBLIC_POWERBASE_ANON_KEY ?? ''
)
