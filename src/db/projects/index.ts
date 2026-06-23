import { PrimitiveProjectType, ProjectType } from '@/db/types'
import fs from 'fs'
import path from 'path'

export const primitiveProjects: PrimitiveProjectType[] = [
  {
    slug: 'lista-15-exercicios',
    title: {
      en: 'Exercises list: Choose and solve',
      pt: 'Lista de 15 exercícios: Escolher e resolver',
    },
    date: '2026-03-31',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODU3OTMyNTMyNjI1/details/',
  },
]

function readDescription(slug: string, lang: 'en' | 'pt'): string {
  return fs.readFileSync(
    path.join(process.cwd(), `src/db/projects/descriptions/${slug}.${lang}.md`),
    'utf-8',
  )
}

export function getProjects(): ProjectType[] {
  return primitiveProjects.map((project) => ({
    ...project,
    description: {
      en: readDescription(project.slug, 'en'),
      pt: readDescription(project.slug, 'pt'),
    },
  }))
}

export function getProjectBySlug(slug: string): ProjectType | undefined {
  return getProjects().find((t) => t.slug === slug)
}
