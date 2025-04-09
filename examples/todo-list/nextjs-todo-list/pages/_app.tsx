import { powerbase } from '@/lib/initPowerbase'
import '@/styles/app.css'
import { SessionContextProvider } from '@skorpland/auth-helpers-react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionContextProvider powerbaseClient={powerbase}>
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
