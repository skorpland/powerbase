import { createClient } from '@skorpland/powerbase-js'
import apiWrapper from 'lib/api/apiWrapper'
import { NextApiRequest, NextApiResponse } from 'next'

const powerbase = createClient(process.env.POWERBASE_URL!, process.env.POWERBASE_SERVICE_KEY!)

export default (req: NextApiRequest, res: NextApiResponse) => apiWrapper(req, res, handler)

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'DELETE':
      return handleDelete(req, res)
    default:
      res.setHeader('Allow', ['DELETE'])
      res.status(405).json({ data: null, error: { message: `Method ${method} Not Allowed` } })
  }
}

const handleDelete = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  // Get all factors for the user
  const { data: factors, error } = await powerbase.auth.admin.mfa.listFactors({
    userId: id as string,
  })
  if (error) {
    return res.status(400).json({ error: { message: error.message } })
  }

  factors?.factors.forEach(async (factor: any) => {
    const { error } = await powerbase.auth.admin.mfa.deleteFactor({
      id: factor.id,
      userId: id as string,
    })
    if (error) {
      return res.status(400).json({ error: { message: error.message } })
    }
  })

  return res.status(200).json({ data: null, error: null })
}
