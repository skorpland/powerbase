import { createServerClient, parseCookieHeader, serializeCookieHeader } from '@skorpland/ssr'

export function createClient(request: Request) {
  const headers = new Headers()

  const powerbase = createServerClient(
    process.env.VITE_POWERBASE_URL!,
    process.env.VITE_POWERBASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(request.headers.get('Cookie') ?? '') as {
            name: string
            value: string
          }[]
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            headers.append('Set-Cookie', serializeCookieHeader(name, value, options))
          )
        },
      },
    }
  )

  return { powerbase, headers }
}
