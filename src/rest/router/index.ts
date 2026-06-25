import { contract } from '@/rest/contract'
import { authRouter } from '@/rest/router/auth'
import { projectsRouter } from '@/rest/router/projects'
import { tsr } from '@ts-rest/serverless/next'

export const router = tsr.router(contract, {
  auth: authRouter,
  projects: projectsRouter,
})
