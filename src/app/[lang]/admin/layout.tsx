import { LocaleType } from '@/lib/dictionaries'
import getSession from '@/lib/session/get-session'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = (await params) as { lang: LocaleType }

  const session = await getSession({ redirect: true, lang })
  if (!session) {
    const { lang } = await params
    redirect(`/${lang}/login`)
  }

  return <>{children}</>
}
