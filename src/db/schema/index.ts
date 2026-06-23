import { projectsTable } from '@/db/schema/projects'
import { usersTable } from '@/db/schema/users'

export type TranslationType = {
  pt: string
  en: string
}

export const schema = {
  projects: projectsTable,
  users: usersTable,
}
