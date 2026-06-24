'use server'

import { apiClient } from '@/core/rest/client'
import { contract } from '@/core/rest/contract'
import { DictionaryInterface } from '@/lib/dictionaries'
import { cookies } from 'next/headers'
import { z } from 'zod'

export async function loginAction(
  data: z.infer<typeof contract.auth.login.body>,
  dict: DictionaryInterface,
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

  if (response.body.code === 1) {
    return dict.login.error.invalidCredentials
  }

  return dict.login.error.systemError
}
