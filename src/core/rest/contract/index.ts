import { authContract } from '@/core/rest/contract/auth'
import { projectsContract } from '@/core/rest/contract/projects'

export const contract = {
  auth: authContract,
  projects: projectsContract,
}
