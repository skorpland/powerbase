import AccountForm from './account-form'
import { createClient } from '@/utils/powerbase/server'

export default async function Account() {
  const powerbase = await createClient()

  const {
    data: { user },
  } = await powerbase.auth.getUser()

  return <AccountForm user={user} />
}
