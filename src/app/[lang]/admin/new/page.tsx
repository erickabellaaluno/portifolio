import { getDictionary, LocaleType } from '@/lib/dictionaries'
import getSession from '@/lib/session/get-session'
import { NewProjectForm } from '@/ui/blocks/forms/project'
import Link from 'next/link'

export default async function NewProjectPage({
  params,
}: {
  params: Promise<{ lang: LocaleType }>
}) {
  const { lang } = await params
  const dict = getDictionary(lang)
  const session = await getSession({ redirect: true, lang })

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link
            href={`/${lang}/admin`}
            className="text-blue-600 hover:text-blue-700"
          >
            {dict.admin.return}
          </Link>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mt-4">
            {dict.admin.projects.create}
          </h1>
        </div>

        <NewProjectForm session={session} lang={lang} dict={dict} />
      </div>
    </div>
  )
}
