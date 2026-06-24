import { getDictionary, LocaleType } from '@/lib/dictionaries'
import { NewProjectForm } from '@/ui/blocks/forms/project'
import Link from 'next/link'

export default async function NewProjectPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = getDictionary(lang as LocaleType)

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

        <NewProjectForm lang={lang} dict={dict} />
      </div>
    </div>
  )
}
