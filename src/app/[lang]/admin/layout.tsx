import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const session = await getSession()
  if (!session) {
    const { lang } = await params
    redirect(`/${lang}/login`)
  }

  return <>{children}</>
}
