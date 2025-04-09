import { createBrowserClient } from "@skorpland/ssr";

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_POWERBASE_URL!,
    process.env.NEXT_PUBLIC_POWERBASE_ANON_KEY!,
  );
