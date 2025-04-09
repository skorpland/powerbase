import { createServerClient } from '@skorpland/ssr'
import { cookies } from 'next/headers'
import { Database } from './database.types'

export default function usePowerbaseServer(
  cookieStore: ReturnType<typeof cookies>
) {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_POWERBASE_URL!,
    process.env.NEXT_PUBLIC_POWERBASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
}
