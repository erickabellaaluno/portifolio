import { primitiveProjects } from '@/db/projects'
import fs from 'fs'
import path from 'path'

const basePath = path.join(process.cwd(), 'src/db/projects/descriptions')

const languages = ['en', 'pt'] as const

const missing: string[] = []

for (const project of primitiveProjects) {
  for (const lang of languages) {
    const filePath = path.join(basePath, `${project.slug}.${lang}.md`)

    if (!fs.existsSync(filePath)) {
      missing.push(filePath)
    }
  }
}

if (missing.length > 0) {
  console.error('\n❌ Missing markdown files:\n')

  missing.forEach((file) => console.error(' - ' + file))

  console.error(`\nTotal missing: ${missing.length}\n`)

  process.exit(1)
}

console.log('✅ All project markdown files exist')
