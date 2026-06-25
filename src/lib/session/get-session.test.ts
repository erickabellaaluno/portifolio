import { describe, expect, it, vi } from 'vitest'

const cookiesMock = vi.fn()
const redirectMock = vi.fn()
const getMock = vi.fn()
const encryptMock = vi.fn()
const decryptMock = vi.fn()

vi.mock('@/lib/session/jwt', () => ({
  encrypt: encryptMock,
  decrypt: decryptMock,
}))

vi.mock('next/headers', () => ({
  cookies: cookiesMock,
}))

vi.mock('next/navigation', () => ({
  redirect: redirectMock,
}))

describe('get session', () => {
  it('reads the token from cookies and returns the session', async () => {
    const { default: getSession } = await import('./get-session')

    cookiesMock.mockReturnValueOnce({ get: getMock })
    getMock.mockReturnValueOnce({ value: '_encrypted_token_' })
    decryptMock.mockReturnValueOnce({ email: 'test@example.com' })

    const session = await getSession()

    expect(session).toHaveProperty('payload')
    expect(session?.payload).toEqual({ email: 'test@example.com' })
    expect(cookiesMock).toHaveBeenCalledOnce()
    expect(getMock).toHaveBeenCalledWith('token')
  })
})
