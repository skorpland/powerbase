import { createClient } from '@skorpland/powerbase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

const powerbaseUrl = 'https://project.powerbase.club'
const powerbaseAnonKey = 'your-anon-key'

export const powerbase = createClient(powerbaseUrl, powerbaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
