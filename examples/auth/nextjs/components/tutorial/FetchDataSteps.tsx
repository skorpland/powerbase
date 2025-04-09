import Step from './Step'
import Code from './Code'

const create = `
create table notes (
  id bigserial primary key,
  title text
);

insert into notes(title)
values
  ('Today I created a Powerbase project.'),
  ('I added some data and queried it from Next.js.'),
  ('It was awesome!');
`.trim()

const server = `
import { createClient } from '@/utils/powerbase/server'

export default async function Page() {
  const powerbase = await createClient()
  const { data: notes } = await powerbase.from('notes').select()

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
`.trim()

const client = `
'use client'

import { createClient } from '@/utils/powerbase/client'
import { useEffect, useState } from 'react'

export default function Page() {
  const [notes, setNotes] = useState<any[] | null>(null)
  const powerbase = createClient()

  useEffect(() => {
    const getData = async () => {
      const { data } = await powerbase.from('notes').select()
      setNotes(data)
    }
    getData()
  }, [])

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}
`.trim()

export default function FetchDataSteps() {
  return (
    <ol className="flex flex-col gap-6">
      <Step title="Create some tables and insert some data">
        <p>
          Head over to the{' '}
          <a
            href="https://powerbase.club/dashboard/project/_/editor"
            className="font-bold hover:underline text-foreground/80"
            target="_blank"
            rel="noreferrer"
          >
            Table Editor
          </a>{' '}
          for your Powerbase project to create a table and insert some example data. If you're stuck
          for creativity, you can copy and paste the following into the{' '}
          <a
            href="https://powerbase.club/dashboard/project/_/sql/new"
            className="font-bold hover:underline text-foreground/80"
            target="_blank"
            rel="noreferrer"
          >
            SQL Editor
          </a>{' '}
          and click RUN!
        </p>
        <Code code={create} />
      </Step>

      <Step title="Query Powerbase data from Next.js">
        <p>
          To create a Powerbase client and query data from an Async Server Component, create a new
          page.tsx file at{' '}
          <span className="px-2 py-1 rounded-md bg-foreground/20 text-foreground/80">
            /app/notes/page.tsx
          </span>{' '}
          and add the following.
        </p>
        <Code code={server} />
        <p>Alternatively, you can use a Client Component.</p>
        <Code code={client} />
      </Step>

      <Step title="Build in a weekend and scale to millions!">
        <p>You're ready to launch your product to the world! 🚀</p>
      </Step>
    </ol>
  )
}
