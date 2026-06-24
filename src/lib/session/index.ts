'use server'

import getEnv from '@/lib/env'
import { SessionPayload, sessionPayload } from '@/lib/session/payload'
import { jwtVerify, SignJWT } from 'jose'
import { cookies } from 'next/headers'
import 'server-only'

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

    const result = sessionPayload.safeParse(payload)

    if (!result.success) return null

    return result.data
  } catch {
    return null
  }
}

export async function getSession(): Promise<SessionPayload | null> {
  const token = (await cookies()).get('token')?.value

  return decrypt(token)
}

export async function clearSession() {
  const cookieStore = await cookies()

  cookieStore.set('token', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    expires: new Date(0),
  })
}
