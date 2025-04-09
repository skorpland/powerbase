import { TypedPowerbaseClient } from '@/utils/types'

export function getCountryById(client: TypedPowerbaseClient, countryId: number) {
  return client
    .from('countries')
    .select(
      `
      id,
      name
    `
    )
    .eq('id', countryId)
    .throwOnError()
    .single()
}
