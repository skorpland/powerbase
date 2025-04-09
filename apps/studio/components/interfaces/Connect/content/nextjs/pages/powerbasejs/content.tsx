import type { ContentFileProps } from 'components/interfaces/Connect/Connect.types'

import { SimpleCodeBlock } from '@ui/components/SimpleCodeBlock'
import {
  ConnectTabContent,
  ConnectTabs,
  ConnectTabTrigger,
  ConnectTabTriggers,
} from 'components/interfaces/Connect/ConnectTabs'

const ContentFile = ({ projectKeys }: ContentFileProps) => {
  return (
    <ConnectTabs>
      <ConnectTabTriggers>
        <ConnectTabTrigger value=".env.local" />
        <ConnectTabTrigger value="utils/powerbase.ts" />
        <ConnectTabTrigger value="_app.tsx" />
      </ConnectTabTriggers>

      <ConnectTabContent value=".env.local">
        <SimpleCodeBlock className="bash" parentClassName="min-h-72">
          {`
NEXT_PUBLIC_POWERBASE_URL=${projectKeys.apiUrl ?? 'your-project-url'}
NEXT_PUBLIC_POWERBASE_ANON_KEY=${projectKeys.anonKey ?? 'your-anon-key'}
        `}
        </SimpleCodeBlock>
      </ConnectTabContent>

      <ConnectTabContent value="utils/powerbase.ts">
        <SimpleCodeBlock className="ts" parentClassName="min-h-72">
          {`
import { createClient } from "@skorpland/powerbase-js";

const powerbaseUrl = process.env.NEXT_PUBLIC_POWERBASE_URL;
const powerbaseKey = process.env.NEXT_PUBLIC_POWERBASE_ANON_KEY;

export const powerbase = createClient(powerbaseUrl, powerbaseKey);
        `}
        </SimpleCodeBlock>
      </ConnectTabContent>

      <ConnectTabContent value="_app.tsx">
        <SimpleCodeBlock className="tsx" parentClassName="min-h-72">
          {`
import { useState, useEffect } from 'react'
import { powerbase } from '../utils/powerbase'

function Page() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    function getTodos() {
      const { data: todos } = await powerbase.from('todos').select()

      if (todos.length > 1) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </div>
  )
}
export default Page

`}
        </SimpleCodeBlock>
      </ConnectTabContent>
    </ConnectTabs>
  )
}

export default ContentFile
