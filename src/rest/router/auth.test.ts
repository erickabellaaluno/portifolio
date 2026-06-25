import { beforeEach, describe, expect, it, vi } from 'vitest'

const findByEmailMock = vi.fn()
const encryptMock = vi.fn()
const compareMock = vi.fn(async (plain: string, hash: string) => plain === hash)

vi.mock('@/core/users.repository', () => ({
  usersRepository: {
    findByEmail: findByEmailMock,
  },
}))

vi.mock('@/lib/session/jwt', () => ({
  encrypt: encryptMock,
}))

vi.mock('bcryptjs', () => ({
  default: {
    compare: compareMock,
  },
}))

describe('auth router handleLogin', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns 401 if email is not found', async () => {
    findByEmailMock.mockResolvedValueOnce(undefined)
    const { handleLogin } = await import('./auth')

    const response = await handleLogin({
      body: { email: 'missing@example.com', password: 'pass' },
    })

    expect(response).toEqual({
      body: { error: { message: 'Invalid credentials.', code: 1 } },
      status: 401,
    })
  })

  it('returns 401 if password does not match', async () => {
    findByEmailMock.mockResolvedValueOnce({
      email: 'test@example.com',
      passwordHash: 'hash',
    })
    compareMock.mockResolvedValueOnce(false)
    const { handleLogin } = await import('./auth')

    const response = await handleLogin({
      body: { email: 'test@example.com', password: 'wrong' },
    })

    expect(response).toEqual({
      body: { error: { message: 'Invalid credentials.', code: 1 } },
      status: 401,
    })
  })

  it('returns 200 with token when credentials are valid', async () => {
    findByEmailMock.mockResolvedValueOnce({
      email: 'test@example.com',
      passwordHash: 'hash',
    })
    compareMock.mockResolvedValueOnce(true)
    encryptMock.mockResolvedValueOnce('token123')
    const { handleLogin } = await import('./auth')

    const response = await handleLogin({
      body: { email: 'test@example.com', password: 'hash' },
    })

    expect(response).toEqual({ body: { token: 'token123' }, status: 200 })
  })
})
