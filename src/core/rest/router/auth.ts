import { contract } from '@/core/rest/contract'
import { usersRepository } from '@/core/users.repository'
import { encrypt } from '@/lib/session'
import { ServerInferRequest, ServerInferResponses } from '@ts-rest/core'
import { tsr } from '@ts-rest/serverless/next'
import bcrypt from 'bcryptjs'

async function handleLogin(
  request: ServerInferRequest<typeof contract.auth.login>,
): Promise<ServerInferResponses<typeof contract.auth.login>> {
  const user = await usersRepository.findByEmail(request.body.email)

  if (!user) {
    return {
      body: { error: { message: 'Invalid credentials.', code: 1 } },
      status: 401,
    }
  }

  const passwordMatches = await bcrypt.compare(
    request.body.password,
    user.passwordHash,
  )

  if (!passwordMatches) {
    return {
      body: { error: { message: 'Invalid credentials.', code: 1 } },
      status: 401,
    }
  }

  const token = await encrypt({
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    email: user.email,
  })

  return {
    body: { token },
    status: 200,
  }
}

export const authRouter = tsr.router(contract.auth, {
  login: handleLogin,
})
