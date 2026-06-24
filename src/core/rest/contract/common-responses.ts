import { AppRouteResponse } from '@ts-rest/core'
import z from 'zod'

export const commonResponses: Record<number, AppRouteResponse> = {
  500: z.object({
    error: z.object({
      message: z.string(),
      code: z.number(),
    }),
  }),
}
