import { usersService } from '@/core/users.service'

export async function seedUsers() {
  usersService.createUser({
    email: 'admin@example.com',
    plainPassword: 'password123',
  })
}
