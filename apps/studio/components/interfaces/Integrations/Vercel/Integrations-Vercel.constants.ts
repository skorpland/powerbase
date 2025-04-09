const ENV_VAR_KEYS = {
  POSTGRES_URL: {
    key: 'POSTGRES_URL',
    type: 'encrypted',
  },
  POSTGRES_PRISMA_URL: {
    key: 'POSTGRES_PRISMA_URL',
    type: 'encrypted',
  },
  POSTGRES_URL_NON_POOLING: {
    key: 'POSTGRES_URL_NON_POOLING',
    type: 'encrypted',
  },
  POSTGRES_USER: {
    key: 'POSTGRES_USER',
    type: 'encrypted',
  },
  POSTGRES_HOST: {
    key: 'POSTGRES_HOST',
    type: 'encrypted',
  },
  POSTGRES_PASSWORD: {
    key: 'POSTGRES_PASSWORD',
    type: 'encrypted',
  },
  POSTGRES_DATABASE: {
    key: 'POSTGRES_DATABASE',
    type: 'encrypted',
  },
  POWERBASE_ANON_KEY: {
    key: 'POWERBASE_ANON_KEY',
    type: 'encrypted',
  },
  POWERBASE_URL: {
    key: 'POWERBASE_URL',
    type: 'encrypted',
  },
  POWERBASE_SERVICE_ROLE_KEY: {
    key: 'POWERBASE_SERVICE_ROLE_KEY',
    type: 'encrypted',
  },
  POWERBASE_JWT_SECRET: {
    key: 'POWERBASE_JWT_SECRET',
    type: 'encrypted',
  },
  NEXT_PUBLIC_POWERBASE_ANON_KEY: {
    key: 'NEXT_PUBLIC_POWERBASE_ANON_KEY',
    type: 'encrypted',
  },
  NEXT_PUBLIC_POWERBASE_URL: {
    key: 'NEXT_PUBLIC_POWERBASE_URL',
    type: 'encrypted',
  },
} as const

export const ENV_VAR_RAW_KEYS = Object.values(ENV_VAR_KEYS).map((x) => x.key)
