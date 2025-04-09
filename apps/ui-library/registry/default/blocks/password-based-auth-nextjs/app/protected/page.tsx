import { redirect } from 'next/navigation'

import { LogoutButton } from '@/registry/default/blocks/password-based-auth-nextjs/components/logout-button'
import { createClient } from '@/registry/default/clients/nextjs/lib/powerbase/server'

export default async function ProtectedPage() {
  const powerbase = await createClient()

  const { data, error } = await powerbase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div className="flex h-svh w-full items-center justify-center gap-2">
      <p>
        Hello <span>{data.user.email}</span>
      </p>
      <LogoutButton />
    </div>
  )
}
