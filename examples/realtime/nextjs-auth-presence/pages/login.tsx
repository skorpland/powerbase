import { usePowerbaseClient, useUser } from '@skorpland/auth-helpers-react'
import { Auth, ThemePower } from '@skorpland/auth-ui-react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const LoginPage: NextPage = () => {
  const powerbaseClient = usePowerbaseClient()
  const user = useUser()

  if (!user) {
    return (
      <main className={styles.main}>
        <Auth
          redirectTo="http://localhost:3000/"
          appearance={{ theme: ThemePower }}
          powerbaseClient={powerbaseClient}
        />
      </main>
    )
  }

  return (
    <>
      <button onClick={() => powerbaseClient.auth.signOut()}>Sign out</button>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  )
}

export default LoginPage
