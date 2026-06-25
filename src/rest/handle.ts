import {
  AppRoute,
  ClientInferRequest,
  ClientInferResponses,
} from '@ts-rest/core'
import { NextRequest, NextResponse } from 'next/server'

export async function handle<Route extends AppRoute>(
  request: NextRequest,
  handler: (
    request: ClientInferRequest<Route>,
  ) => Promise<ClientInferResponses<Route>>,
) {
  const req = await makeRequest<Route>(request)

  const result = await handler(req)

  return NextResponse.json(result.body, {
    status: result.status,
  })
}

async function makeRequest<Route extends AppRoute>(
  request: NextRequest,
): Promise<ClientInferRequest<Route>> {
  const body = await request.json().catch(() => undefined)

  const query = Object.fromEntries(request.nextUrl.searchParams)

  const headers = Object.fromEntries(request.headers.entries())

  return {
    params: {},
    query,
    headers,
    body,
  } as ClientInferRequest<Route>
}
