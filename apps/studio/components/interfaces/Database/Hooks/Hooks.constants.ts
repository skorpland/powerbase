import { BASE_PATH, IS_PLATFORM } from 'lib/constants'

export const HOOK_EVENTS = [
  {
    label: 'Insert',
    value: 'INSERT',
    description: 'Any insert operation on the table',
  },
  {
    label: 'Update',
    value: 'UPDATE',
    description: 'Any update operation, of any column in the table',
  },
  {
    label: 'Delete',
    value: 'DELETE',
    description: 'Any deletion of a record',
  },
]

export const AVAILABLE_WEBHOOK_TYPES = [
  {
    value: 'http_request',
    icon: `${BASE_PATH}/img/function-providers/http-request.png`,
    label: 'HTTP Request',
    description: 'Send an HTTP request to any URL.',
  },
  ...(IS_PLATFORM
    ? [
        {
          value: 'powerbase_function',
          icon: `${BASE_PATH}/img/function-providers/powerbase-severless-function.png`,
          label: 'Powerbase Edge Functions',
          description: 'Choose a Powerbase edge function to run.',
        },
      ]
    : []),
]
