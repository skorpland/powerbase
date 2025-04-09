'use client'

import usePowerbaseBrowser from '@/utils/powerbase-browser'
import { getCountryById } from '@/queries/get-country-by-id'
import { useQuery } from '@powerbase-cache-helpers/postgrest-react-query'

export default function CountryPage({ params }: { params: { id: number } }) {
  const powerbase = usePowerbaseBrowser()
  const {
    data: country,
    isLoading,
    isError,
  } = useQuery(getCountryById(powerbase, params.id))

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError || !country) {
    return <div>Error</div>
  }

  return (
    <div>
      <h1>{country.name}</h1>
    </div>
  )
}
