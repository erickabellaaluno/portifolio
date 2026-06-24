import { contract } from '@/core/rest/contract'
import { authRouter } from '@/core/rest/router/auth'
import { projectsRouter } from '@/core/rest/router/projects'
import { tsr } from '@ts-rest/serverless/next'

export const router = tsr.router(contract, {
  auth: authRouter,
  projects: projectsRouter,
})
