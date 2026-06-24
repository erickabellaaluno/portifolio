import { commonResponses } from '@/core/rest/contract/common'
import { initContract } from '@ts-rest/core'
import { z } from 'zod'

const c = initContract()

export const authContract = c.router(
  {
    login: {
      method: 'POST',
      path: '/api/auth/login',
      body: z.object({
        email: z.email(),
        password: z.string().min(6),
      }),
      responses: {
        200: z.object({
          token: z.jwt(),
        }),
        401: z.object({
          error: z.object({
            message: z.literal('Invalid credentials.'),
            code: z.literal(1),
          }),
        }),
      },
      summary: 'Sign in',
      strictStatusCodes: true,
    },
  },
  {
    commonResponses,
    strictStatusCodes: true,
  },
)
