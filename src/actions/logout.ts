'use server'

import clearSession from '@/lib/session/clear-session'

export async function logoutAction(): Promise<boolean> {
  return clearSession()
    .then(() => true)
    .catch(() => false)
}
