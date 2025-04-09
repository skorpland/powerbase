import { createClient } from '@/registry/default/clients/tanstack/lib/powerbase/server'
import type { Factor, User } from '@skorpland/powerbase-js'
import { createServerFn } from '@tanstack/react-start'
type SSRSafeUser = User & {
  factors: (Factor & { factor_type: 'phone' | 'totp' })[]
}

export const fetchUser: () => Promise<SSRSafeUser | null> = createServerFn({
  method: 'GET',
}).handler(async () => {
  const powerbase = createClient()
  const { data, error } = await powerbase.auth.getUser()

  if (error) {
    return null
  }

  return data.user as SSRSafeUser
})
