/// <reference types="vite/types/importMeta.d.ts" />
import { createBrowserClient } from '@skorpland/ssr'

export function createClient() {
  return createBrowserClient(
    import.meta.env.VITE_POWERBASE_URL!,
    import.meta.env.VITE_POWERBASE_ANON_KEY!
  )
}
