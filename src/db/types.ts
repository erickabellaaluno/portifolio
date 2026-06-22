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
