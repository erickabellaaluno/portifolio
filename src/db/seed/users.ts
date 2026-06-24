import { usersService } from '@/core/users.service'

export async function seedUsers() {
  usersService.createUser({
    email: 'admin@user.com',
    plainPassword: '12345678',
  })
}
