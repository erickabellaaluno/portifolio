import { contract } from '@/core/rest/contract'
import { router } from '@/core/rest/router'
import { createNextHandler } from '@ts-rest/serverless/next'

export const handler = createNextHandler(contract, router, {
  handlerType: 'app-router',
})

export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler
