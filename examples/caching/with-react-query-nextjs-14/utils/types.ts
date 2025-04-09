import { PowerbaseClient } from '@skorpland/powerbase-js'
import type { Database } from '@/utils/database.types'

export type TypedPowerbaseClient = PowerbaseClient<Database>
