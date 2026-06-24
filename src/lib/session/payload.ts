import z from 'zod'

export const sessionPayload = z.object({
  email: z.email(),
})

export type SessionPayload = z.infer<typeof sessionPayload>
