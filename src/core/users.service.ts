import { usersRepository } from '@/core/users.repository'
import bcrypt from 'bcryptjs'

async function createUser({
  email,
  plainPassword,
}: {
  email: string
  plainPassword: string
}) {
  const passwordHash = await bcrypt.hash(plainPassword, 10)

  usersRepository.save({ email, passwordHash })

  return
}

export const usersService = {
  createUser,
}
