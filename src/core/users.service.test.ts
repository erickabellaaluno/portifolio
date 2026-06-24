import { beforeEach, describe, expect, it, vi } from 'vitest'

const hashMock = vi.fn(async (plain: string) => `hashed:${plain}`)
const saveMock = vi.fn()

vi.mock('bcryptjs', () => ({
  default: {
    hash: hashMock,
  },
}))

vi.mock('@/core/users.repository', () => ({
  usersRepository: {
    save: saveMock,
  },
}))

describe('usersService', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('hashes a plain password and saves the user record', async () => {
    const { usersService } = await import('./users.service')

    await usersService.createUser({
      email: 'test@example.com',
      plainPassword: 'secret',
    })

    expect(hashMock).toHaveBeenCalledOnce()
    expect(hashMock).toHaveBeenCalledWith('secret', 10)
    expect(saveMock).toHaveBeenCalledOnce()
    expect(saveMock).toHaveBeenCalledWith({
      email: 'test@example.com',
      passwordHash: 'hashed:secret',
    })
  })
})
