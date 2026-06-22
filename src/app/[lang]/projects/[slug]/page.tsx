import { getProjectBySlug, projects } from '@/db/projects'
import { getDictionary, type Locale, locales } from '@/i18n/dictionaries'
import {
  IconArrowLeft,
  IconBrandGithub,
  IconCalendar,
  IconSchool,
  IconTag,
} from '@tabler/icons-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return locales.flatMap((lang) =>
    projects.map((t) => ({ lang, slug: t.slug })),
  )
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ lang: Locale; slug: string }>
}) {
  const { lang, slug } = await params
  const dict = getDictionary(lang)
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const formattedDate = new Date(project.date).toLocaleDateString(
    lang === 'pt' ? 'pt-BR' : 'en-US',
    { year: 'numeric', month: 'long', day: 'numeric' },
  )

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* Back link */}
      <Link
        href={`/${lang}`}
        className="inline-flex items-center gap-2 text-sm mb-10 group transition-colors
          text-neutral-400 hover:text-amber-500
          dark:text-neutral-400 dark:hover:text-amber-400"
      >
        <IconArrowLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        {dict.works.back}
      </Link>

      {/* Header */}
      <div className="mb-10">
        <p
          className="text-xs font-mono tracking-widest uppercase mb-3 flex items-center gap-2
          text-amber-500 dark:text-amber-400"
        >
          <IconCalendar size={14} />
          {formattedDate}
        </p>

        <h1
          className="text-4xl sm:text-5xl font-bold mb-4
          text-neutral-900 dark:text-neutral-100"
        >
          {project.title[lang]}
        </h1>

        <p
          className="text-lg leading-relaxed
          text-neutral-600 dark:text-neutral-400"
        >
          {project.description[lang]}
        </p>
      </div>

      {/* Tags */}
      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          <IconTag
            size={16}
            className="mt-0.5 shrink-0 text-neutral-400 dark:text-neutral-500"
          />
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-mono border
                bg-neutral-100 text-neutral-600 border-neutral-200
                dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Divider */}
      <div className="h-px mb-10 bg-neutral-200 dark:bg-neutral-800" />

      {/* Links */}
      <div className="flex flex-col sm:flex-row gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 border
              bg-neutral-100 text-neutral-800 border-neutral-200 hover:bg-amber-400 hover:text-neutral-950 hover:border-amber-400
              dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700 dark:hover:bg-amber-400 dark:hover:text-neutral-950 dark:hover:border-amber-400"
          >
            <IconBrandGithub size={20} />
            {dict.works.github}
          </a>
        )}
        {project.classroomUrl && (
          <a
            href={project.classroomUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 border
              bg-transparent text-neutral-500 border-neutral-200 hover:bg-neutral-100 hover:text-neutral-800
              dark:text-neutral-400 dark:border-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <IconSchool size={20} />
            {dict.works.classroom}
          </a>
        )}
      </div>
    </div>
  )
}
