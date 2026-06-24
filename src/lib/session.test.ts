/* @vitest-environment node */
import { beforeEach, describe, expect, it, vi } from 'vitest'

vi.mock('server-only', () => ({}))

const cookiesMock = vi.fn()
const getMock = vi.fn()
const setMock = vi.fn()

vi.mock('@/lib/env', () => ({
  default: vi.fn(() => ({
    jwt: {
      secret: 'test-secret',
    },
  })),
}))

vi.mock('next/headers', () => ({
  cookies: cookiesMock,
}))

describe('session helpers', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('encrypts and decrypts a payload with a valid token', async () => {
    const { encrypt, decrypt } = await import('./session')

    const token = await encrypt({ email: 'test@example.com' })
    const payload = await decrypt(token)

    expect(typeof token).toBe('string')
    expect(payload).toEqual({ email: 'test@example.com' })
  })

  it('returns null for undefined or invalid tokens', async () => {
    const { decrypt } = await import('./session')

    expect(await decrypt(undefined)).toBeNull()
    expect(await decrypt('invalid-token')).toBeNull()
  })

  it('reads the token from cookies and returns the session payload', async () => {
    const { encrypt, getSession } = await import('./session')

    const token = await encrypt({ email: 'test@example.com' })
    cookiesMock.mockReturnValueOnce({ get: getMock })
    getMock.mockReturnValueOnce({ value: token })

    const session = await getSession()

    expect(session).toEqual({ email: 'test@example.com' })
    expect(cookiesMock).toHaveBeenCalledOnce()
    expect(getMock).toHaveBeenCalledWith('token')
  })

  it('clears the session cookie with an expired token', async () => {
    const { clearSession } = await import('./session')

    cookiesMock.mockReturnValueOnce({ set: setMock })

    await clearSession()

    expect(setMock).toHaveBeenCalledOnce()
    expect(setMock).toHaveBeenCalledWith('token', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      expires: expect.any(Date),
    })

    const setOptions = setMock.mock.calls[0][2]
    expect(setOptions.expires.getTime()).toBe(0)
  })
})
