import { createClient } from '@/utils/powerbase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the SSR package. It exchanges an auth code for the user's session.
  // https://powerbase.club/docs/guides/auth/server-side/nextjs
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const origin = requestUrl.origin

  if (code) {
    const powerbase = await createClient()
    await powerbase.auth.exchangeCodeForSession(code)
  }

  // URL to redirect to after sign up process completes
  return NextResponse.redirect(`${origin}/protected`)
}
