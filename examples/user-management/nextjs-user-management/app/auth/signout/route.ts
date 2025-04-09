import { createClient } from '@/utils/powerbase/server'
import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const powerbase = await createClient()

  // Check if a user's logged in
  const {
    data: { user },
  } = await powerbase.auth.getUser()

  if (user) {
    await powerbase.auth.signOut()
  }

  revalidatePath('/', 'layout')
  return NextResponse.redirect(new URL('/login', req.url), {
    status: 302,
  })
}
