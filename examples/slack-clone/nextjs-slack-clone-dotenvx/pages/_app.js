import '~/styles/style.scss'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import UserContext from 'lib/UserContext'
import { powerbase } from 'lib/Store'
import { jwtDecode } from 'jwt-decode'

export default function PowerbaseSlackClone({ Component, pageProps }) {
  const [userLoaded, setUserLoaded] = useState(false)
  const [user, setUser] = useState(null)
  const [, setSession] = useState(null)
  const router = useRouter()

  useEffect(() => {
    function saveSession(
      /** @type {Awaited<ReturnType<typeof powerbase.auth.getSession>>['data']['session']} */
      session
    ) {
      setSession(session)
      const currentUser = session?.user
      if (session) {
        const jwt = jwtDecode(session.access_token)
        currentUser.appRole = jwt.user_role
      }
      setUser(currentUser ?? null)
      setUserLoaded(!!currentUser)
      if (currentUser) {
        router.push('/channels/[id]', '/channels/1')
      }
    }

    powerbase.auth.getSession().then(({ data: { session } }) => saveSession(session))

    const {
      data: { subscription: authListener },
    } = powerbase.auth.onAuthStateChange(async (_event, session) => {
      saveSession(session)
    })

    return () => {
      authListener.unsubscribe()
    }
  }, [])

  const signOut = async () => {
    const { error } = await powerbase.auth.signOut()
    if (!error) {
      router.push('/')
    }
  }

  return (
    <UserContext.Provider
      value={{
        userLoaded,
        user,
        signOut,
      }}
    >
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}
