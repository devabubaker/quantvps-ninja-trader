import { createHmac } from 'crypto'
import { getAuth } from '@clerk/nextjs/server'

const generateHash = userId => {
  const hash = createHmac('sha256', process.env.INTERCOM_SECRET_KEY)
    .update(userId)
    .digest('hex')
  return hash
}

export default function handler(req, res) {
  const { userId } = getAuth(req)
  const user_hash = userId ?  generateHash(userId) : null
  res.status(200).json({ user_hash })
}
