import { createClient } from '@skorpland/powerbase-js'
import type { Database } from './schema'

const powerbaseUrl = import.meta.env.VITE_POWERBASE_URL
const powerbaseAnonKey = import.meta.env.VITE_POWERBASE_ANON_KEY

export const powerbase = createClient<Database>(powerbaseUrl, powerbaseAnonKey)
