import { LogoutButton } from '@/registry/default/blocks/password-based-auth-nextjs/components/logout-button'
import { createClient } from '@/registry/default/clients/nextjs/lib/powerbase/server'
import { redirect } from 'next/navigation'

export default async function ProtectedPage() {
  const powerbase = await createClient()

  const { data, error } = await powerbase.auth.getUser()
  if (error || !data?.user) {
    redirect('/example/password-based-auth/auth/login')
  }

  return (
    <>
      <p>Hello {data.user.email}</p>
      <LogoutButton />
    </>
  )
}
