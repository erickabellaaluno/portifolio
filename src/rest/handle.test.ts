import type {
  AppRouteMutation,
  ClientInferRequest,
  ClientInferResponses,
} from '@ts-rest/core'
import type { NextRequest } from 'next/server'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import z from 'zod'

const jsonMock = vi.fn((body: unknown, options: { status: number }) => ({
  body,
  status: options.status,
}))

vi.mock('next/server', () => ({
  NextResponse: {
    json: jsonMock,
  },
}))

type MockRequest = {
  json: () => Promise<unknown>
  nextUrl: {
    searchParams: URLSearchParams
  }
  headers: {
    entries: () => Iterable<[string, string]>
  }
}

// Create a minimal test route that satisfies AppRoute
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const testRoute = {
  method: 'POST',
  path: '/test',
  body: z.object({ test: z.string() }).optional(),
  responses: {
    200: z.object({ result: z.string() }),
  },
} as const satisfies AppRouteMutation

describe('handle', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('forwards the request values to the handler and serializes the response', async () => {
    const { handle } = await import('./handle')

    const request: MockRequest = {
      json: vi.fn(async () => ({ name: 'test' })),
      nextUrl: {
        searchParams: new URLSearchParams('page=5'),
      },
      headers: {
        entries: () => [['x-custom', '1']],
      },
    }

    const result = await handle(
      request as unknown as NextRequest,
      async (
        req: ClientInferRequest<typeof testRoute>,
      ): Promise<ClientInferResponses<typeof testRoute>> => ({
        body: { result: `${JSON.stringify(req.body)}` },
        status: 200,
        headers: new Headers(),
      }),
    )

    expect(result).toBeDefined()
    expect(result.status).toBe(200)
    expect(jsonMock).toHaveBeenCalledOnce()
  })

  it('handles JSON parse failures gracefully', async () => {
    const { handle } = await import('./handle')

    const request: MockRequest = {
      json: vi.fn(async () => {
        throw new Error('bad json')
      }),
      nextUrl: {
        searchParams: new URLSearchParams('page=5'),
      },
      headers: {
        entries: () => [['x-custom', '1']],
      },
    }

    const result = await handle(
      request as unknown as NextRequest,
      async (
        req: ClientInferRequest<typeof testRoute>,
      ): Promise<ClientInferResponses<typeof testRoute>> => ({
        body: { result: `body-${JSON.stringify(req.body)}` },
        status: 200,
        headers: new Headers(),
      }),
    )

    expect(result).toBeDefined()
    expect(result.status).toBe(200)
  })
})
