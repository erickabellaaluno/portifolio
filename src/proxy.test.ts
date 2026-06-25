import type { NextRequest } from 'next/server'
import { beforeEach, describe, expect, it, vi } from 'vitest'

const decryptMock = vi.fn()

vi.mock('@/lib/session/jwt', () => ({
  decrypt: decryptMock,
}))

const redirectMock = vi.fn((url: string) => ({
  type: 'redirect',
  url: String(url),
}))
const nextMock = vi.fn(() => ({ type: 'next' }))

vi.mock('next/server', () => ({
  NextResponse: {
    redirect: redirectMock,
    next: nextMock,
  },
}))

describe('proxy', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  function makeRequest({
    pathname,
    acceptLanguage = 'en-US',
    token,
  }: {
    pathname: string
    acceptLanguage?: string
    token?: string
  }): NextRequest {
    const baseUrl = `http://localhost${pathname}`
    const nextUrl = new URL(baseUrl)

    return {
      nextUrl,
      headers: {
        get: () => acceptLanguage,
      },
      cookies: {
        get: () => (token ? { value: token } : undefined),
      },
      url: baseUrl,
    } as unknown as NextRequest
  }

  it('redirects an authenticated user from admin login with no locale prefix to the admin dashboard with locale', async () => {
    decryptMock.mockResolvedValueOnce({ email: 'test@example.com' })

    const { proxy } = await import('./proxy')
    const result = await proxy(
      makeRequest({ pathname: '/admin/login', token: 'valid-token' }),
    )

    expect(result).toEqual({
      type: 'redirect',
      url: expect.stringContaining('/en/admin/login'),
    })
  })

  it('redirects an unauthenticated user to login when entering admin area', async () => {
    decryptMock.mockResolvedValueOnce(null)

    const { proxy } = await import('./proxy')
    const result = await proxy(
      makeRequest({ pathname: '/admin', token: undefined }),
    )

    expect(result).toEqual({
      type: 'redirect',
      url: expect.stringContaining('/en/login'),
    })
  })

  it('redirects to locale-prefixed path when no locale is present', async () => {
    decryptMock.mockResolvedValueOnce(null)

    const { proxy } = await import('./proxy')
    const result = await proxy(
      makeRequest({
        pathname: '/projects',
        token: undefined,
        acceptLanguage: 'fr-FR',
      }),
    )

    expect(result).toEqual({
      type: 'redirect',
      url: expect.stringContaining('/pt/projects'),
    })
  })

  it('returns next when the path already contains a supported locale', async () => {
    const { proxy } = await import('./proxy')
    const result = await proxy(
      makeRequest({ pathname: '/en/about', token: undefined }),
    )

    expect(result).toEqual({ type: 'next' })
  })
})
