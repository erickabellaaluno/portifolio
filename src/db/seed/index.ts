import { seedProjects } from '@/db/seed/projects'

async function main() {
  await seedProjects()
}

main()
