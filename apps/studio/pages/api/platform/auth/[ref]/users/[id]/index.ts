import { createClient } from '@skorpland/powerbase-js'
import { NextApiRequest, NextApiResponse } from 'next'

import apiWrapper from 'lib/api/apiWrapper'

const powerbase = createClient(process.env.POWERBASE_URL!, process.env.POWERBASE_SERVICE_KEY!)

export default (req: NextApiRequest, res: NextApiResponse) => apiWrapper(req, res, handler)

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req

  switch (method) {
    case 'PATCH':
      return handlePatch(req, res)
    case 'DELETE':
      return handleDelete(req, res)
    default:
      res.setHeader('Allow', ['PATCH'])
      res.status(405).json({ data: null, error: { message: `Method ${method} Not Allowed` } })
  }
}

const handlePatch = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const { ban_duration } = req.body
  const { data, error } = await powerbase.auth.admin.updateUserById(id as string, { ban_duration })

  if (error) return res.status(400).json({ error: { message: error.message } })
  return res.status(200).json(data.user)
}

const handleDelete = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const { data, error } = await powerbase.auth.admin.deleteUser(id as string)

  if (error) return res.status(400).json({ error: { message: error.message } })
  return res.status(200).json(data)
}
