import { useQuery, UseQueryOptions } from '@tanstack/react-query'

import { get, handleError } from 'data/fetchers'
import type { ResponseError } from 'types'
import { databaseKeys } from './keys'

type PowervisorConfigurationVariables = {
  projectRef?: string
}

export async function getPowervisorConfiguration(
  { projectRef }: PowervisorConfigurationVariables,
  signal?: AbortSignal
) {
  if (!projectRef) throw new Error('Project ref is required')

  const { data, error } = await get(`/platform/projects/{ref}/config/powervisor`, {
    params: { path: { ref: projectRef } },
    signal,
  })
  if (error) handleError(error)
  return data
}

export type PowervisorConfigurationData = Awaited<ReturnType<typeof getPowervisorConfiguration>>
export type PowervisorConfigurationError = ResponseError

export const usePowervisorConfigurationQuery = <TData = PowervisorConfigurationData>(
  { projectRef }: PowervisorConfigurationVariables,
  {
    enabled = true,
    ...options
  }: UseQueryOptions<PowervisorConfigurationData, PowervisorConfigurationError, TData> = {}
) =>
  useQuery<PowervisorConfigurationData, PowervisorConfigurationError, TData>(
    databaseKeys.poolingConfiguration(projectRef),
    ({ signal }) => getPowervisorConfiguration({ projectRef }, signal),
    {
      enabled: enabled && typeof projectRef !== 'undefined',
      ...options,
    }
  )
