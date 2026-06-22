import { getProjectBySlug, getProjects } from '@/db/projects'
import { getDictionary, type Locale, locales } from '@/i18n/dictionaries'
import MarkdownRenderer from '@/ui/blocks/markdown-renderer'
import LinkButton from '@/ui/components/button/link-button'
import Divider from '@/ui/components/divider'
import {
  IconArrowLeft,
  IconBrandGithub,
  IconCalendar,
  IconSchool,
  IconTag,
} from '@tabler/icons-react'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const projects = getProjects()

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

  const formattedDate = format(parseISO(project.date), 'dd/MM/yyyy')

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
          className="text-4xl sm:text-5xl font-bold mb-2
          text-neutral-900 dark:text-neutral-100"
        >
          {project.title[lang]}
        </h1>

        <Tags tags={project.tags} />

        <MarkdownRenderer content={project.description[lang]} />
      </div>

      <Divider />

      {/* Links */}
      <div className="flex flex-col sm:flex-row gap-4">
        {project.githubUrl && (
          <LinkButton href={project.githubUrl}>
            <IconBrandGithub size={20} />
            {dict.works.github}
          </LinkButton>
        )}
        {project.classroomUrl && (
          <LinkButton href={project.classroomUrl}>
            <IconSchool size={20} />
            {dict.works.classroom}
          </LinkButton>
        )}
      </div>
    </div>
  )
}

export function Tags({ tags }: { tags: string[] }) {
  if (tags.length == 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-2 mb-4 items-center">
      <IconTag
        size={16}
        className="shrink-0 text-neutral-400 dark:text-neutral-500"
      />
      {tags.map((tag) => (
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
  )
}
