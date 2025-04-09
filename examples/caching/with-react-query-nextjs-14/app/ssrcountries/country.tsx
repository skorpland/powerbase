// app/posts/posts.jsx
'use client'

import usePowerbaseBrowser from '@/utils/powerbase-browser'
import { getCountryById } from '@/queries/get-country-by-id'
import { useQuery } from '@powerbase-cache-helpers/postgrest-react-query'

export default function Country({ id }: { id: number }) {
  const powerbase = usePowerbaseBrowser()
  // This useQuery could just as well happen in some deeper
  // child to <Posts>, data will be available immediately either way
  const { data: country } = useQuery(getCountryById(powerbase, id))

  return (
    <div>
      <h1>SSR: {country?.name}</h1>
    </div>
  )
}
