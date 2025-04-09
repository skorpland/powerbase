import { createClient as createPowerbaseClient } from '@skorpland/powerbase-js'

export function createClient() {
  return createPowerbaseClient(
    import.meta.env.VITE_POWERBASE_URL!,
    import.meta.env.VITE_POWERBASE_ANON_KEY!
  )
}
