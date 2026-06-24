import { TranslationType } from '@/db/schema'
import { integer, jsonb, pgTable, varchar } from 'drizzle-orm/pg-core'

export const projectsTable = pgTable('projects', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  slug: varchar('slug', { length: 255 }).unique().notNull(),
  title: jsonb('title').$type<TranslationType>().notNull(),
  description: jsonb('description').$type<TranslationType>().notNull(),
  content: jsonb('content').$type<TranslationType>().notNull(),
  date: varchar('date', { length: 255 }).notNull(),
  tags: varchar('tags', { length: 255 }).array().notNull(),
  githubUrl: varchar('githubUrl', { length: 255 }),
  classroomUrl: varchar('classroomUrl', { length: 255 }),
})
