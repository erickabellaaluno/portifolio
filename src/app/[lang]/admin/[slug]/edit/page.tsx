import { projectsRepository } from '@/core/projects.repository'
import { getDictionary, LocaleType } from '@/lib/dictionaries'
import { getSession } from '@/lib/session'
import { UpdateProjectForm } from '@/ui/blocks/forms/project'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ lang: LocaleType; slug: string }>
}) {
  const { lang, slug } = await params
  const project = await projectsRepository.findBySlug(slug)
  const dict = getDictionary(lang)
  const session = await getSession({ redirect: true, lang })

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link
            href={`/${lang}/admin`}
            className="text-blue-600 hover:text-blue-700"
          >
            ← Back to Admin
          </Link>
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mt-4">
            Edit Project
          </h1>
        </div>

        <UpdateProjectForm
          defaultValues={{
            slug: project.slug,
            title: project.title,
            description: project.description,
            content: project.content,
            date: project.date,
            tags: project.tags,
            githubUrl: project.githubUrl || undefined,
            classroomUrl: project.classroomUrl || undefined,
          }}
          session={session}
          slug={slug}
          lang={lang}
          dict={dict}
        />
      </div>
    </div>
  )
}
