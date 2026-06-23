import { seedProjects } from '@/db/seed/projects'
import { seedUsers } from '@/db/seed/users'

async function main() {
  await seedProjects()
  await seedUsers()
}

main()
