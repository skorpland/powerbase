import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import type { components } from 'data/api'
import { handleError, patch } from 'data/fetchers'
import type { ResponseError } from 'types'
import { databaseKeys } from './keys'

type PowervisorConfigurationUpdateVariables = {
  ref: string
} & components['schemas']['UpdatePowervisorConfigBody']

export async function updatePowervisorConfiguration({
  ref,
  default_pool_size,
}: PowervisorConfigurationUpdateVariables) {
  if (!ref) return console.error('Project ref is required')

  const { data, error } = await patch('/platform/projects/{ref}/config/powervisor', {
    params: { path: { ref } },
    body: { default_pool_size },
  })

  if (error) handleError(error)
  return data
}

type PowervisorConfigurationUpdateData = Awaited<ReturnType<typeof updatePowervisorConfiguration>>

export const usePowervisorConfigurationUpdateMutation = ({
  onSuccess,
  onError,
  ...options
}: Omit<
  UseMutationOptions<
    PowervisorConfigurationUpdateData,
    ResponseError,
    PowervisorConfigurationUpdateVariables
  >,
  'mutationFn'
> = {}) => {
  const queryClient = useQueryClient()

  return useMutation<
    PowervisorConfigurationUpdateData,
    ResponseError,
    PowervisorConfigurationUpdateVariables
  >((vars) => updatePowervisorConfiguration(vars), {
    async onSuccess(data, variables, context) {
      const { ref } = variables
      await queryClient.invalidateQueries(databaseKeys.poolingConfiguration(ref))
      await onSuccess?.(data, variables, context)
    },
    async onError(data, variables, context) {
      if (onError === undefined) {
        toast.error(`Failed to update Shared Pooler configuration: ${data.message}`)
      } else {
        onError(data, variables, context)
      }
    },
    ...options,
  })
}
