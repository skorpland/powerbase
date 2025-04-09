import { useState, useEffect } from 'react'
import { powerbase } from 'lib/Store'
import { Auth } from '@skorpland/auth-ui-react'
import { ThemePower } from '@skorpland/auth-ui-shared'

const Home = () => {
  const [session, setSession] = useState(null)

  useEffect(() => {
    powerbase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = powerbase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (
      <div className="w-full h-full flex justify-center items-center p-4 bg-gray-300">
        <div className="w-full sm:w-1/2 xl:w-1/3">
          <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg bg-white">
            <Auth
              powerbaseClient={powerbase}
              appearance={{ theme: ThemePower }}
              providers={['github']}
            />
          </div>
        </div>
      </div>
    )
  } else {
    return <div>Logged in!</div>
  }
}

export default Home
