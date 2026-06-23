import db from '@/db'
import { projectsTable } from '@/db/schema'
import { eq } from 'drizzle-orm'

export type ListProjectResultType = {
  id: number
  date: string
  slug: string
  title: { en: string; pt: string }
  description: { en: string; pt: string }
  tags: string[]
}

export type ListProjectsResultType = ListProjectResultType[]

export type FindProjectType = {
  id: number
  date: string
  slug: string
  title: { en: string; pt: string }
  description: { en: string; pt: string }
  tags: string[]
  githubUrl: string | null
  classroomUrl: string | null
}

async function list(): Promise<ListProjectsResultType> {
  const result = await db
    .select({
      id: projectsTable.id,
      date: projectsTable.date,
      slug: projectsTable.slug,
      title: projectsTable.title,
      description: projectsTable.description,
      tags: projectsTable.tags,
    })
    .from(projectsTable)

  return result
}

async function findBySlug(slug: string): Promise<FindProjectType | undefined> {
  const result = await db.query.projects.findFirst({
    where: eq(projectsTable.slug, slug),
  })

  return result
}

export const projectsRepository = {
  findBySlug,
  list,
}
