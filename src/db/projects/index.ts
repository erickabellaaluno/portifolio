import { PrimitiveProjectType, ProjectType } from '@/db/types'
import fs from 'fs'
import path from 'path'

export const primitiveProjects: PrimitiveProjectType[] = [
  {
    slug: 'lista-15-exercicios',
    title: {
      en: '15 Exercises — Choose and Solve',
      pt: 'Lista de 15 exercícios: Escolher e resolver',
    },
    date: '2026-03-31',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODU3OTMyNTMyNjI1/details/',
  },
  {
    slug: 'lista-10-exercicios-claude',
    title: {
      en: '10 Exercises from "Introduction to Algorithms with Python" (by Claude.ai)',
      pt: 'Lista de 10 Exercícios da Introdução a Algoritmos com Python by Claude.ai',
    },
    date: '2026-04-10',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk2OTk2MzY4ODI0/details/',
  },
  {
    slug: 'geracao-avaliacao-exercicios-algoritmos-llms',
    title: {
      en: 'Generation and Evaluation of Algorithm Exercises with LLMs',
      pt: 'Geração e Avaliação de Exercícios de Algoritmos com LLMs',
    },
    date: '2026-04-10',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODU4NTI5NjQyNzU0/details/',
  },
  {
    slug: 'resolver-5-exercicios-papel',
    title: {
      en: 'Solve the 5 Exercises on Paper',
      pt: 'Resolver os 5 exercícios em papel',
    },
    date: '2026-04-21',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3MjMyNjQ5OTYz/details',
  },
  {
    slug: 'exercicios-listas-vetores-arrays-python',
    title: {
      en: 'Lists / Vectors / Arrays Exercises in Python',
      pt: 'Resolver os exercícios de listas/vetores/arrays em Python',
    },
    date: '2026-04-24',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3MjM1NDcyNTQ0/details/',
  },
  {
    slug: 'formulacao-resolucao-problemas-vetores-listas-llms',
    title: {
      en: 'Formulation and Resolution of Vector/List Problems using LLMs',
      pt: 'Formulação e Resolução de Problemas com Vetores/Listas usando LLMs Objetivo',
    },
    date: '2026-04-24',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3NDczMzk3Mzgy/details/',
  },
  {
    slug: 'gerar-versoes-codigo',
    title: {
      en: 'Generate Code Versions for Visual Results',
      pt: 'Gerar as diferentes versões do código até ter resultados visuais interessantes e consistentes',
    },
    date: '2026-05-05',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODYzMDE2ODMyNDUy/details/',
  },
  {
    slug: 'problemas-outros-disciplinas',
    title: {
      en: 'Problems from Other Courses — Multi-approach Solutions',
      pt: 'Problemas de outras disciplinas – resolução em múltiplas abordagens',
    },
    date: '2026-05-08',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODYzNjU2NzEyMTk1/details/',
  },
  {
    slug: 'escolher-entregar-problemas-engenharia',
    title: {
      en: 'Choose and Submit One of Two Proposed Engineering Problems',
      pt: 'escolher e entregar 1 dos dois problemas de engenharia propostos',
    },
    date: '2026-05-12',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODY0MTM1NzI0NTcx/details/',
  },
  {
    slug: 'entregar-outro-problema-engenharia',
    title: {
      en: 'Submit the Other Engineering Problem from the Previous Class',
      pt: 'entregar o outro dos dois problemas de engenharia propostos da aula passada',
    },
    date: '2026-05-15',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3ODMwODA3ODA5/details',
  },
  {
    slug: 'escolher-resolver-problema-engenharia',
    title: {
      en: 'Choose and Solve an Engineering Problem',
      pt: 'Escolher e resolver um problema de engenharia',
    },
    date: '2026-05-19',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3ODY4MDAzNTI3/details/',
  },
  {
    slug: 'evolucao-tecnica-solucao-atividade-anterior',
    title: {
      en: 'Technical Evolution of the Previous Activity Solution',
      pt: 'Evolução técnica da solução desenvolvida na atividade anterior',
    },
    date: '2026-05-22',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODY1NzkxMDYxODM4/details/',
  },
  {
    slug: 'modularizacao-codigo-avaliacao-llms',
    title: {
      en: 'Code Modularization and LLM Evaluation (in class)',
      pt: 'Modularização de Código e Avaliação de LLMs (em aula)',
    },
    date: '2026-06-09',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk4MTQzMjAxNjY2/details/',
  },
  {
    slug: 'desenvolvimento-assistido-ia-portal-alegrete',
    title: {
      en: 'AI-Assisted Development for the Alegrete.org Portal',
      pt: 'Desenvolvimento Assistido por IA para o Portal Alegrete.org',
    },
    date: '2026-06-16',
    tags: ['python'],
    classroomUrl:
      'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk4MjE2NjI2NzM2/details/',
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
