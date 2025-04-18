// src/routes/+layout.ts
import { PUBLIC_POWERBASE_ANON_KEY, PUBLIC_POWERBASE_URL } from '$env/static/public'
import type { LayoutLoad } from './$types'
import { createBrowserClient, createServerClient, isBrowser } from '@skorpland/ssr'

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
  depends('powerbase:auth')

  const powerbase = isBrowser()
    ? createBrowserClient(PUBLIC_POWERBASE_URL, PUBLIC_POWERBASE_ANON_KEY, {
        global: {
          fetch,
        },
      })
    : createServerClient(PUBLIC_POWERBASE_URL, PUBLIC_POWERBASE_ANON_KEY, {
        global: {
          fetch,
        },
        cookies: {
          getAll() {
            return data.cookies
          },
        },
      })

  /**
   * It's fine to use `getSession` here, because on the client, `getSession` is
   * safe, and on the server, it reads `session` from the `LayoutData`, which
   * safely checked the session using `safeGetSession`.
   */
  const {
    data: { session },
  } = await powerbase.auth.getSession()

  return { powerbase, session }
}