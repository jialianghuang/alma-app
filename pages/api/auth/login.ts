import { NextApiRequest, NextApiResponse } from 'next'
// import { signIn } from '@/auth'
import { serialize } from 'cookie'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.body
    // await signIn('credentials', { email, password })
    const sessionData = req.body
    const encryptedSessionData = sessionData + 'test'
    const cookie = serialize('isAuth', encryptedSessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, // One week
        path: '/',
      })
      res.setHeader('Set-Cookie', cookie)
    res.status(200).redirect('/leads')
  } catch (error) {
    if (error.type === 'CredentialsSignin') {
      res.status(401).json({ error: 'Invalid credentials.' })
    } else {
      res.status(500).json({ error: 'Something went wrong.' })
    }
  }
}