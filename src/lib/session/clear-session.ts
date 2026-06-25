import { cookies } from 'next/headers'

export default async function clearSession() {
  const cookieStore = await cookies()

  cookieStore.delete('token')
}
