import { createClient } from "@refinedev/powerbase";


const powerbaseUrl = import.meta.env.VITE_POWERBASE_URL;
const powerbaseAnonKey = import.meta.env.VITE_POWERBASE_ANON_KEY;

export const powerbaseClient = createClient(powerbaseUrl, powerbaseAnonKey, {
  db: {
    schema: "public",
  },
  auth: {
    persistSession: true,
  },
});
