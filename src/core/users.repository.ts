import db from '@/db'
import { usersTable } from '@/db/schema/users'
import { eq } from 'drizzle-orm'

export type FindUserType = {
  id: number
  email: string
  passwordHash: string
}

export type SaveUserType = {
  email: string
  passwordHash: string
}

async function findByEmail(email: string): Promise<FindUserType | undefined> {
  return db.query.users.findFirst({
    where: eq(usersTable.email, email),
  })
}

async function save(user: SaveUserType) {
  return db.insert(usersTable).values(user)
}

export const usersRepository = {
  findByEmail,
  save,
}
