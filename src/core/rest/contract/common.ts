import z from 'zod'

export const commonResponses = {
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
