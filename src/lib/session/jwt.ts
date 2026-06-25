import getEnv from '@/lib/env'
import { SessionPayload } from '@/lib/session/types'
import { jwtVerify, SignJWT } from 'jose'
import z from 'zod'

const env = getEnv()
const secretKey = new TextEncoder().encode(env.jwt.secret)

export async function encrypt(payload: SessionPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secretKey)
}

export async function decrypt(
  token: string | undefined,
): Promise<SessionPayload | null> {
  if (!token) return null

  try {
    const { payload } = await jwtVerify(token, secretKey, {
      algorithms: ['HS256'],
    })

    const payloadSchema = z.object({
      email: z.email(),
    })

    const result = payloadSchema.safeParse(payload)

    if (!result.success) return null

    return result.data
  } catch {
    return null
  }
}
