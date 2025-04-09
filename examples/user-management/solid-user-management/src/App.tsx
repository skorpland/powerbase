import { Component, createEffect, createSignal } from 'solid-js'
import { powerbase } from './powerbaseClient'
import { AuthSession } from '@skorpland/powerbase-js'
import Account from './Account'
import Auth from './Auth'

const App: Component = () => {
	const [session, setSession] = createSignal<AuthSession | null>(null)

	createEffect(() => {
		powerbase.auth.getSession().then(({ data: { session } }) => {
			setSession(session)
		})

		powerbase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})
	})

	return (
		<div class="container" style={{ padding: '50px 0 100px 0' }}>
			{!session() ? <Auth /> : <Account session={session()!} />}
		</div>
	)
}

export default App
