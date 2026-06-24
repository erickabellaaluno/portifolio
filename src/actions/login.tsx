'use server'

import { apiClient } from '@/core/rest/client'
import { contract } from '@/core/rest/contract'
import { cookies } from 'next/headers'
import { z } from 'zod'

export async function loginAction(
  data: z.infer<typeof contract.auth.login.body>,
): Promise<true | string> {
  const response = await apiClient.auth.login({ body: data })

  if (response.status === 200) {
    const token = response.body.token

    const cookieStore = await cookies()
    cookieStore.set('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
    })

    return true
  }

  return response.body.error.message
}
