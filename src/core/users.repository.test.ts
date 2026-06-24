import { beforeEach, describe, expect, it, vi } from 'vitest'

const findFirstMock = vi.fn()
const insertMock = vi.fn()
const insertValuesMock = vi.fn()

vi.mock('@/db', () => ({
  default: {
    query: {
      users: {
        findFirst: findFirstMock,
      },
    },
    insert: insertMock.mockImplementation(() => ({ values: insertValuesMock })),
  },
}))

vi.mock('@/db/schema/users', () => ({
  usersTable: {},
}))

vi.mock('drizzle-orm', () => ({
  eq: vi.fn((field: unknown, value: unknown) => ({ field, value })),
}))

describe('usersRepository', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('finds a user by email', async () => {
    findFirstMock.mockResolvedValueOnce({
      id: 1,
      email: 'a@b.com',
      passwordHash: 'hash',
    })

    const { usersRepository } = await import('./users.repository')

    const user = await usersRepository.findByEmail('a@b.com')

    expect(user).toEqual({ id: 1, email: 'a@b.com', passwordHash: 'hash' })
    expect(findFirstMock).toHaveBeenCalledOnce()
  })

  it('saves a user', async () => {
    insertValuesMock.mockReturnValueOnce({ rows: [] })

    const { usersRepository } = await import('./users.repository')

    await usersRepository.save({ email: 'a@b.com', passwordHash: 'hash' })

    expect(insertMock).toHaveBeenCalledOnce()
    expect(insertValuesMock).toHaveBeenCalledOnce()
  })
})
