import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@skorpland/powerbase-js";

const powerbaseUrl = "https://bqeuunydbomjvynieund.powerbase.club";
const powerbaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxZXV1bnlkYm9tanZ5bmlldW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxMTY4NzMsImV4cCI6MjAxMzY5Mjg3M30.K-g-aVqNSutPQ11V68voGkmy3rzel5GkQj6zsBu2V3E";

export const powerbase = createClient(powerbaseUrl, powerbaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
