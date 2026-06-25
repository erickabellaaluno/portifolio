/* @vitest-environment node */
import { describe, expect, it, vi } from 'vitest'

vi.mock('server-only', () => ({}))

vi.mock('@/lib/env', () => ({
  default: vi.fn(() => ({
    jwt: {
      secret: 'test-secret',
    },
  })),
}))

describe('jwt', () => {
  it('encrypts and decrypts a payload with a valid token', async () => {
    const { encrypt, decrypt } = await import('./jwt')

    const token = await encrypt({ email: 'test@example.com' })
    const payload = await decrypt(token)

    expect(typeof token).toBe('string')
    expect(payload).toEqual({ email: 'test@example.com' })
  })

  it('returns null for undefined or invalid tokens', async () => {
    const { decrypt } = await import('./jwt')

    expect(await decrypt(undefined)).toBeNull()
    expect(await decrypt('invalid-token')).toBeNull()
  })
})
