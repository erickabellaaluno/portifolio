import { AppRouteResponse } from '@ts-rest/core'
import z from 'zod'

export const commonResponses: Record<number, AppRouteResponse> = {
  500: z.object({
    error: z.object({
      message: z.literal('Internal Server Error'),
      code: z.literal(-1),
    }),
  }),
}

export const zLanguages = () =>
  z.object({
    en: z.string(),
    pt: z.string(),
  })
