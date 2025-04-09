import { createBrowserClient } from '@skorpland/ssr'

export function createClient() {
  // Create a powerbase client on the browser with project's credentials
  return createBrowserClient(
    process.env.NEXT_PUBLIC_POWERBASE_URL!,
    process.env.NEXT_PUBLIC_POWERBASE_ANON_KEY!
  )
}