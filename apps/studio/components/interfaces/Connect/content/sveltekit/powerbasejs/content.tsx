import type { ContentFileProps } from 'components/interfaces/Connect/Connect.types'

import {
  ConnectTabs,
  ConnectTabTriggers,
  ConnectTabTrigger,
  ConnectTabContent,
} from 'components/interfaces/Connect/ConnectTabs'
import { SimpleCodeBlock } from '@ui/components/SimpleCodeBlock'

const ContentFile = ({ projectKeys }: ContentFileProps) => {
  return (
    <ConnectTabs>
      <ConnectTabTriggers>
        <ConnectTabTrigger value=".env.local" />
        <ConnectTabTrigger value="src/lib/powerbaseClient.js" />
        <ConnectTabTrigger value="src/routes/+page.server.js" />
        <ConnectTabTrigger value="src/routes/+page.svelte" />
      </ConnectTabTriggers>

      <ConnectTabContent value=".env.local">
        <SimpleCodeBlock className="bash" parentClassName="min-h-72">
          {`
PUBLIC_POWERBASE_URL=${projectKeys.apiUrl ?? 'your-project-url'}
PUBLIC_POWERBASE_ANON_KEY=${projectKeys.anonKey ?? 'your-anon-key'}
        `}
        </SimpleCodeBlock>
      </ConnectTabContent>

      <ConnectTabContent value="src/lib/powerbaseClient.js">
        <SimpleCodeBlock className="js" parentClassName="min-h-72">
          {`
import { createClient } from "@skorpland/powerbase-js";
import { PUBLIC_POWERBASE_URL, PUBLIC_POWERBASE_ANON_KEY } from "$env/static/public"

const powerbaseUrl = PUBLIC_POWERBASE_URL;
const powerbaseKey = PUBLIC_POWERBASE_ANON_KEY;

export const powerbase = createClient(powerbaseUrl, powerbaseKey);
        `}
        </SimpleCodeBlock>
      </ConnectTabContent>

      <ConnectTabContent value="src/routes/+page.server.js">
        <SimpleCodeBlock className="js" parentClassName="min-h-72">
          {`
import { powerbase } from "$lib/powerbaseClient";

export async function load() {
  const { data } = await powerbase.from("countries").select();
  return {
    countries: data ?? [],
  };
}
`}
        </SimpleCodeBlock>
      </ConnectTabContent>

      <ConnectTabContent value="src/routes/+page.svelte">
        <SimpleCodeBlock className="html" parentClassName="min-h-72">
          {`
<script>
  export let data;
</script>

<ul>
  {#each data.countries as country}
    <li>{country.name}</li>
  {/each}
</ul>
`}
        </SimpleCodeBlock>
      </ConnectTabContent>
    </ConnectTabs>
  )
}

export default ContentFile
