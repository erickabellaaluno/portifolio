import { authContract } from '@/rest/contract/auth'
import { projectsContract } from '@/rest/contract/projects'

export const contract = {
  auth: authContract,
  projects: projectsContract,
}
