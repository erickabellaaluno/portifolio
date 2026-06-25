import { DictionaryInterface } from '@/lib/dictionaries'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const mockSet = vi.fn()
const mockLogin = vi.fn()

vi.mock('@/rest/client', () => ({
  apiClient: {
    auth: {
      login: mockLogin,
    },
  },
}))

vi.mock('next/headers', () => ({
  cookies: vi.fn(() => ({
    set: mockSet,
  })),
}))

describe('loginAction', () => {
  const dict = {
    login: { error: { invalidCredentials: 'Invalid credentials__MOCK' } },
    errors: { systemError: 'System error__MOCK' },
  } as DictionaryInterface

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('stores the token and returns true when login is successful', async () => {
    mockLogin.mockResolvedValueOnce({
      status: 200,
      body: { token: 'token123' },
    })

    const { loginAction } = await import('./login')
    const result = await loginAction(
      { email: 'test@example.com', password: 'pass' },
      dict,
    )

    expect(result).toBe(true)
    expect(mockSet).toHaveBeenCalledWith('token', 'token123', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    })
  })

  it('returns the invalid credentials translation for 401 responses', async () => {
    mockLogin.mockResolvedValueOnce({
      status: 401,
      body: { error: { code: 1 } },
    })

    const { loginAction } = await import('./login')
    const result = await loginAction(
      { email: 'test@example.com', password: 'pass' },
      dict,
    )

    expect(result).toBe('Invalid credentials__MOCK')
  })

  it('returns the system error translation for unknown failures', async () => {
    mockLogin.mockResolvedValueOnce({
      status: 500,
      body: { error: { code: 2 } },
    })

    const { loginAction } = await import('./login')
    const result = await loginAction(
      { email: 'test@example.com', password: 'pass' },
      dict,
    )

    expect(result).toBe('System error__MOCK')
  })
})
