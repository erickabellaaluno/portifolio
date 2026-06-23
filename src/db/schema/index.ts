import { projectsTable } from '@/db/schema/projects'

export type TranslationType = {
  pt: string
  en: string
}

export const schema = {
  projects: projectsTable,
}
