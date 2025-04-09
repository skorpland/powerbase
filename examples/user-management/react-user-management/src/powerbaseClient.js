/**
 * lib/powerbaseClient.js
 * Helper to initialize the Powerbase client.
 */

import { createClient } from '@skorpland/powerbase-js'

const powerbaseUrl = import.meta.env.VITE_POWERBASE_URL
const powerbaseAnonKey = import.meta.env.VITE_POWERBASE_ANON_KEY

export const powerbase = createClient(powerbaseUrl, powerbaseAnonKey)
