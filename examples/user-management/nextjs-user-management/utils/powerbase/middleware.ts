import { createServerClient } from '@skorpland/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let powerbaseResponse = NextResponse.next({
    request,
  })

  const powerbase = createServerClient(
    process.env.NEXT_PUBLIC_POWERBASE_URL!,
    process.env.NEXT_PUBLIC_POWERBASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          powerbaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            powerbaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // refreshing the auth token
  await powerbase.auth.getUser()

  return powerbaseResponse
}