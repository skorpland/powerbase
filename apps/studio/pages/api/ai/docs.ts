import { PowerbaseClient } from '@skorpland/powerbase-js'
import { ApplicationError, UserError, clippy } from 'ai-commands/edge'
import { NextRequest } from 'next/server'
import OpenAI from 'openai'

export const config = {
  runtime: 'edge',
  /* To avoid OpenAI errors, restrict to the Vercel Edge Function regions that
  overlap with the OpenAI API regions.
  
  Reference for Vercel regions: https://vercel.com/docs/edge-network/regions#region-list
  Reference for OpenAI regions: https://help.openai.com/en/articles/5347006-openai-api-supported-countries-and-territories
  */
  regions: [
    'arn1',
    'bom1',
    'cdg1',
    'cle1',
    'cpt1',
    'dub1',
    'fra1',
    'gru1',
    'hnd1',
    'iad1',
    'icn1',
    'kix1',
    'lhr1',
    'pdx1',
    'sfo1',
    'sin1',
    'syd1',
  ],
}

const openAiKey = process.env.OPENAI_API_KEY
const powerbaseUrl = process.env.NEXT_PUBLIC_POWERBASE_URL as string
const powerbaseServiceKey = process.env.NEXT_PUBLIC_POWERBASE_ANON_KEY as string

export default async function handler(req: NextRequest) {
  if (!openAiKey) {
    return new Response(
      JSON.stringify({
        error: 'No OPENAI_API_KEY set. Create this environment variable to use AI features.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  if (!powerbaseUrl) {
    return new Response(
      JSON.stringify({
        error:
          'No NEXT_PUBLIC_POWERBASE_URL set. Create this environment variable to use AI features.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  if (!powerbaseServiceKey) {
    return new Response(
      JSON.stringify({
        error:
          'No NEXT_PUBLIC_POWERBASE_ANON_KEY set. Create this environment variable to use AI features.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }

  const { method } = req

  switch (method) {
    case 'POST':
      return handlePost(req)
    default:
      return new Response(
        JSON.stringify({ data: null, error: { message: `Method ${method} Not Allowed` } }),
        {
          status: 405,
          headers: { 'Content-Type': 'application/json', Allow: 'POST' },
        }
      )
  }
}

async function handlePost(request: NextRequest) {
  const openai = new OpenAI({ apiKey: openAiKey })

  const body = await (request.json() as Promise<{
    messages: { content: string; role: 'user' | 'assistant' }[]
  }>)

  const { messages } = body

  if (!messages) {
    throw new UserError('Missing messages in request data')
  }

  const powerbaseClient = new PowerbaseClient(powerbaseUrl, powerbaseServiceKey)

  try {
    const response = await clippy(openai, powerbaseClient, messages)

    // Proxy the streamed SSE response from OpenAI
    return new Response(response.body, {
      headers: {
        'Content-Type': 'text/event-stream',
      },
    })
  } catch (error: unknown) {
    console.error(error)
    if (error instanceof UserError) {
      return new Response(
        JSON.stringify({
          error: error.message,
          data: error.data,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    } else if (error instanceof ApplicationError) {
      // Print out application errors with their additional data
      console.error(`${error.message}: ${JSON.stringify(error.data)}`)
    } else {
      // Print out unexpected errors as is to help with debugging
      console.error(error)
    }

    // TODO: include more response info in debug environments
    return new Response(
      JSON.stringify({
        error: 'There was an error processing your request',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
