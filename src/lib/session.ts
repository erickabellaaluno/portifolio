import getEnv from '@/lib/env'
import { jwtVerify, SignJWT } from 'jose'
import 'server-only'

const env = getEnv()
const secretKey = env.jwt.secret
const encodedKey = new TextEncoder().encode(secretKey)

type SessionPayload = {
  expiresAt: Date
  email: string
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
}

export async function decrypt(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch {
    console.log('Failed to verify session')
  }
}
