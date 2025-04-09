import { createClient } from "@skorpland/powerbase-js";
import type { Database } from "./schema";

export const powerbase = createClient<Database>(
  import.meta.env.VITE_POWERBASE_URL,
  import.meta.env.VITE_POWERBASE_ANON_KEY
);
