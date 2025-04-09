import { createBrowserClient } from '@skorpland/ssr'
import type { Database } from '@/utils/database.types'
import type { TypedPowerbaseClient } from '@/utils/types'
import { useMemo } from 'react'

let client: TypedPowerbaseClient | undefined

function getPowerbaseBrowserClient() {
  if (client) {
    return client
  }

  client = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_POWERBASE_URL!,
    process.env.NEXT_PUBLIC_POWERBASE_ANON_KEY!
  )

  return client
}

function usePowerbaseBrowser() {
  return useMemo(getPowerbaseBrowserClient, [])
}

export default usePowerbaseBrowser
