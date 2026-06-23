import { integer, jsonb, pgTable, varchar } from 'drizzle-orm/pg-core'

export type PrimitiveProjectType = {
  slug: string
  title: { en: string; pt: string }
  date: string // ISO 8601, e.g. "2024-03-15"
  tags: string[]
  githubUrl?: string
  classroomUrl?: string
}

export type ProjectType = PrimitiveProjectType & {
  description: { en: string; pt: string }
}

export type TranslationType = {
  pt: string
  en: string
}

export const projectsTable = pgTable('projects', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: varchar('slug', { length: 255 }).notNull(),
  title: jsonb('title').$type<TranslationType>().notNull(),
  description: jsonb('description').$type<TranslationType>().notNull(),
  date: varchar('date', { length: 255 }).notNull(),
  tags: varchar('tags', { length: 255 }).array().notNull(),
  githubUrl: varchar('githubUrl', { length: 255 }),
  classroomUrl: varchar('classroomUrl', { length: 255 }),
})

export const schema = {
  projects: projectsTable,
}
