import { createClient } from '@/registry/default/clients/react-router/lib/powerbase/server'
import { type EmailOtpType } from '@skorpland/powerbase-js'
import { type LoaderFunctionArgs, redirect } from 'react-router'

export async function loader({ request }: LoaderFunctionArgs) {
  const requestUrl = new URL(request.url)
  const token_hash = requestUrl.searchParams.get('token_hash')
  const type = requestUrl.searchParams.get('type') as EmailOtpType | null
  const next = requestUrl.searchParams.get('next') || '/'

  if (token_hash && type) {
    const { powerbase, headers } = createClient(request)
    const { error } = await powerbase.auth.verifyOtp({
      type,
      token_hash,
    })
    if (!error) {
      return redirect(next, { headers })
    } else {
      return redirect(`/auth/error?error=${error?.message}`)
    }
  }

  // redirect the user to an error page with some instructions
  return redirect(`/auth/error?error=No token hash or type`)
}
