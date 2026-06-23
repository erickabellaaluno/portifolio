import { findUserByEmail } from '@/core/users.repository'
import getEnv from '@/lib/env'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const env = getEnv()

  const body = await request.json()
  const email =
    typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''
  const password = typeof body?.password === 'string' ? body.password : ''

  if (!email || !password) {
    return NextResponse.json(
      { error: 'Email and password are required.' },
      { status: 400 },
    )
  }

  const user = await findUserByEmail(email)

  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 })
  }

  const passwordMatches = await bcrypt.compare(password, user.passwordHash)

  if (!passwordMatches) {
    return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 })
  }

  const token = jwt.sign({ sub: user.id, email: user.email }, env.jwt.secret, {
    expiresIn: '1h',
  })

  return NextResponse.json({ token }, { status: 200 })
}
