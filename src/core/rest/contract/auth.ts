import { commonResponses } from '.'
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
            message: z.string(),
            code: z.number(),
          }),
        }),
      },
      summary: 'Sign in',
      strictStatusCodes: true,
    },
  },
  {
    commonResponses,
  },
)
