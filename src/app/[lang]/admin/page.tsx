import { getDictionary, LocaleType } from '@/lib/dictionaries'
import getSession from '@/lib/session/get-session'
import { apiClient } from '@/rest/client'
import LogoutButton from '@/ui/components/button/logout-button'
import AdminProjectCard from '@/ui/components/projects/admin-card'
import Link from 'next/link'

export default async function AdminPage({
  params,
}: {
  params: Promise<{ lang: LocaleType }>
}) {
  const { lang } = await params
  const dict = getDictionary(lang)
  const response = await apiClient.projects.list()
  const projects = response.status === 200 ? response.body.data : []

  const session = await getSession({ redirect: true, lang })

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            {dict.admin.title}
          </h1>
          <LogoutButton>{dict.admin.logout}</LogoutButton>
        </div>

        <div className="mb-8">
          <Link
            href={`/${lang}/admin/new`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            {dict.admin.projects.new}
          </Link>
        </div>

        <div className="grid gap-4">
          {projects.length === 0 ? (
            <p className="text-neutral-600 dark:text-neutral-400">
              {dict.admin.projects.empty}
            </p>
          ) : (
            projects.map((project) => (
              <AdminProjectCard
                key={project.slug}
                project={project}
                dict={dict}
                lang={lang}
                session={session}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
