import { createClient } from "@skorpland/powerbase-js";

export default {
  async fetch(request, { POWERBASE_URL, POWERBASE_ANON_KEY }) {
    const powerbase = createClient(POWERBASE_URL, POWERBASE_ANON_KEY);

    const { data } = await powerbase.from("articles").select("*");
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
