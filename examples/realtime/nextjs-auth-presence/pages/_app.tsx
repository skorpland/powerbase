import { createBrowserPowerbaseClient, Session } from '@skorpland/auth-helpers-nextjs'
import { SessionContextProvider } from '@skorpland/auth-helpers-react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import '../styles/globals.css'

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session
}>) {
  const router = useRouter()
  const [powerbaseClient] = useState(() => createBrowserPowerbaseClient())

  useEffect(() => {
    const {
      data: { subscription },
    } = powerbaseClient.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case 'SIGNED_IN':
          router.push('/')
          return
        case 'SIGNED_OUT':
          router.push('/login')
          return
      }
    })
    return subscription.unsubscribe
  }, [])

  return (
    <SessionContextProvider
      powerbaseClient={powerbaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}

export default MyApp
