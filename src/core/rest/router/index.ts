import { contract } from '@/core/rest/contract'
import { authRouter } from '@/core/rest/router/auth'
import { tsr } from '@ts-rest/serverless/next'

export const router = tsr.router(contract, {
  auth: authRouter,
})
