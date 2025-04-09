import { createClient } from '@skorpland/powerbase-js'
import apiWrapper from 'lib/api/apiWrapper'
import { NextApiRequest, NextApiResponse } from 'next'

const powerbase = createClient(process.env.POWERBASE_URL!, process.env.POWERBASE_SERVICE_KEY!)

export default (req: NextApiRequest, res: NextApiResponse) => apiWrapper(req, res, handler)

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'GET':
      return handleGet(req, res)
    case 'POST':
      return handlePost(req, res)

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).json({ data: null, error: { message: `Method ${method} Not Allowed` } })
  }
}

const handleGet = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await powerbase.storage.listBuckets()
  if (error) {
    return res.status(500).json({ error: { message: 'Internal Server Error' } })
  }

  return res.status(200).json(data)
}

const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    id,
    public: isPublicBucket,
    allowed_mime_types: allowedMimeTypes,
    file_size_limit: fileSizeLimit,
  } = req.body

  const { data, error } = await powerbase.storage.createBucket(id, {
    public: isPublicBucket,
    allowedMimeTypes,
    fileSizeLimit,
  })
  if (error) {
    return res.status(400).json({ error: { message: error.message } })
  }

  return res.status(200).json(data)
}
