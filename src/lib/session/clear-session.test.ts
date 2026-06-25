import { describe, expect, it, vi } from 'vitest'

vi.mock('next/headers', () => ({
  cookies: vi.fn(),
}))

describe('clear session', () => {
  it('clears the session cookie with an expired token', async () => {
    const { cookies } = await import('next/headers')
    const { default: clearSession } = await import('./clear-session')

    const deleteMock = vi.fn()
    const cookiesMock = vi.mocked(cookies)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cookiesMock.mockResolvedValueOnce({ delete: deleteMock } as any)

    await clearSession()

    expect(deleteMock).toHaveBeenCalledOnce()
    expect(deleteMock).toHaveBeenCalledWith('token')
  })
})
