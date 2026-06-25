import { contract } from '@/rest/contract'
import { router } from '@/rest/router'
import { createNextHandler, TsRestResponse } from '@ts-rest/serverless/next'

export const handler = createNextHandler(contract, router, {
  handlerType: 'app-router',
  errorHandler: (error: unknown) => {
    console.error('Server Error', error)
    return TsRestResponse.fromJson(
      { error: { message: 'Internal Server Error', code: -1 } },
      { status: 500 },
    )
  },
})

export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler
