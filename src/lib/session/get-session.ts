import { LocaleType } from '@/lib/dictionaries'
import { decrypt } from '@/lib/session/jwt'
import { SessionType } from '@/lib/session/types'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function getSession(): Promise<SessionType | null>
export default async function getSession(forwarding: {
  redirect: false
}): Promise<SessionType | null>
export default async function getSession(forwarding: {
  redirect: true
  lang: LocaleType
}): Promise<SessionType>
export default async function getSession(
  forwarding?: { redirect?: false } | { redirect: true; lang: LocaleType },
): Promise<SessionType | null> {
  const cookieStore = await cookies()

  const token = cookieStore.get('token')?.value ?? ''
  const payload = await decrypt(token)

  if (!payload) {
    if (forwarding?.redirect) {
      redirect(`/${forwarding.lang}`)
    }
    return null
  }

  return { payload, token }
}
