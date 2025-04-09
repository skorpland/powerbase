import { createClient } from '@skorpland/powerbase-js'
import apiWrapper from 'lib/api/apiWrapper'
import { NextApiRequest, NextApiResponse } from 'next'

const powerbase = createClient(process.env.POWERBASE_URL!, process.env.POWERBASE_SERVICE_KEY!)

export default (req: NextApiRequest, res: NextApiResponse) => apiWrapper(req, res, handler)

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'POST':
      return handlePost(req, res)
    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).json({ data: null, error: { message: `Method ${method} Not Allowed` } })
  }
}

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const { path, expiresIn = 60 * 60 * 24 } = req.body

  const { data, error } = await powerbase.storage.from(id as string).createSignedUrl(path, expiresIn)
  if (error) {
    return res.status(400).json({ error: { message: error.message } })
  }

  // change the domain name to the POWERBASE_PUBLIC_URL since POWERBASE_URL is not accessible from the client
  const signedUrl = new URL(data.signedUrl)
  const parsed = new URL(process.env.POWERBASE_PUBLIC_URL!)
  signedUrl.protocol = parsed.protocol
  signedUrl.host = parsed.host
  signedUrl.port = parsed.port
  data.signedUrl = signedUrl.href

  return res.status(200).json(data)
}
