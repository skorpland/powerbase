import { createBrowserClient } from "@skorpland/ssr"

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_POWERBASE_URL!,
    process.env.NEXT_PUBLIC_POWERBASE_ANON_KEY!
  )
}
