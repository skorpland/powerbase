import type { ContentFileProps } from 'components/interfaces/Connect/Connect.types'

import {
  ConnectTabs,
  ConnectTabTrigger,
  ConnectTabTriggers,
  ConnectTabContent,
} from 'components/interfaces/Connect/ConnectTabs'
import { SimpleCodeBlock } from '@ui/components/SimpleCodeBlock'

const ContentFile = ({ projectKeys }: ContentFileProps) => {
  return (
    <ConnectTabs>
      <ConnectTabTriggers>
        <ConnectTabTrigger value=".env.local" />
        <ConnectTabTrigger value="page.tsx" />
        <ConnectTabTrigger value="utils/powerbase/server.ts" />
        <ConnectTabTrigger value="utils/powerbase/client.ts" />
        <ConnectTabTrigger value="utils/powerbase/middleware.ts" />
      </ConnectTabTriggers>

      <ConnectTabContent value=".env.local">
        <SimpleCodeBlock className="bash" parentClassName="min-h-72">
          {`
NEXT_PUBLIC_POWERBASE_URL=${projectKeys.apiUrl ?? 'your-project-url'}
NEXT_PUBLIC_POWERBASE_ANON_KEY=${projectKeys.anonKey ?? 'your-anon-key'}
            `}
        </SimpleCodeBlock>
      </ConnectTabContent>

      <ConnectTabContent value="page.tsx">
        <SimpleCodeBlock className="tsx" parentClassName="min-h-72">
          {`
import { createClient } from '@/utils/powerbase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const powerbase = createClient(cookieStore)

  const { data: todos } = await powerbase.from('todos').select()

  return (
    <ul>
      {todos?.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  )
}
`}
        </SimpleCodeBlock>
      </ConnectTabContent>

      <ConnectTabContent value="utils/powerbase/server.ts">
        <SimpleCodeBlock className="ts" parentClassName="min-h-72">
          {`
import { createServerClient, type CookieOptions } from "@skorpland/ssr";
import { cookies } from "next/headers";

export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
  return createServerClient(
    process.env.NEXT_PUBLIC_POWERBASE_URL!,
    process.env.NEXT_PUBLIC_POWERBASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
          } catch {
            // The \`setAll\` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
};
`}
        </SimpleCodeBlock>
      </ConnectTabContent>
      <ConnectTabContent value="utils/powerbase/client.ts">
        <SimpleCodeBlock className="ts" parentClassName="min-h-72">
          {`
import { createBrowserClient } from "@skorpland/ssr";

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_POWERBASE_URL!,
    process.env.NEXT_PUBLIC_POWERBASE_ANON_KEY!,
  );
`}
        </SimpleCodeBlock>
      </ConnectTabContent>

      <ConnectTabContent value="utils/powerbase/middleware.ts">
        <SimpleCodeBlock className="ts" parentClassName="min-h-72">
          {`
import { createServerClient, type CookieOptions } from "@skorpland/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const createClient = (request: NextRequest) => {
  // Create an unmodified response
  let powerbaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const powerbase = createServerClient(
    process.env.NEXT_PUBLIC_POWERBASE_URL!,
    process.env.NEXT_PUBLIC_POWERBASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          powerbaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            powerbaseResponse.cookies.set(name, value, options)
          )
        },
      },
    },
  );

  return powerbaseResponse
};

`}
        </SimpleCodeBlock>
      </ConnectTabContent>
    </ConnectTabs>
  )
}

export default ContentFile
