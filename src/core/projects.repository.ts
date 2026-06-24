import db from '@/db'
import { projectsTable } from '@/db/schema/projects'
import { eq } from 'drizzle-orm'

export type ListProjectResultType = {
  date: string
  slug: string
  title: { en: string; pt: string }
  description: { en: string; pt: string }
  tags: string[]
}

export type ListProjectsResultType = ListProjectResultType[]

export type FindProjectType = {
  date: string
  slug: string
  title: { en: string; pt: string }
  description: { en: string; pt: string }
  content: { en: string; pt: string }
  tags: string[]
  githubUrl: string | null
  classroomUrl: string | null
}

export type SaveProjectType = {
  date: string
  slug: string
  title: { en: string; pt: string }
  description: { en: string; pt: string }
  content: { en: string; pt: string }
  tags: string[]
  githubUrl?: string
  classroomUrl?: string
}

export type UpdateProjectType = {
  date?: string
  slug?: string
  title?: { en: string; pt: string }
  description?: { en: string; pt: string }
  content?: { en: string; pt: string }
  tags?: string[]
  githubUrl?: string
  classroomUrl?: string
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

async function save(project: SaveProjectType): Promise<FindProjectType> {
  const result = await db.insert(projectsTable).values(project).returning()

  return result[0]
}

async function saveMany(projects: SaveProjectType[]) {
  const result = await db.insert(projectsTable).values(projects)

  return result
}

async function update(
  slug: string,
  project: UpdateProjectType,
): Promise<FindProjectType> {
  const result = await db
    .update(projectsTable)
    .set(project)
    .where(eq(projectsTable.slug, slug))
    .returning()

  return result[0]
}

async function destroy(slug: string): Promise<void> {
  await db.delete(projectsTable).where(eq(projectsTable.slug, slug)).returning()
}

export const projectsRepository = {
  findBySlug,
  list,
  save,
  saveMany,
  update,
  destroy,
}
