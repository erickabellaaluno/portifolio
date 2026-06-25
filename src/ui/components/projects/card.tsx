import { LocaleType } from '@/lib/dictionaries'
import { DictionaryInterface } from '@/lib/dictionaries'
import { contract } from '@/rest/contract'
import { IconArrowRight, IconCalendar } from '@tabler/icons-react'
import { ClientInferResponseBody } from '@ts-rest/core'
import Link from 'next/link'

interface ProjectCardProps {
  project: ClientInferResponseBody<
    typeof contract.projects.list,
    200
  >['data'][number]
  lang: LocaleType
  dict: DictionaryInterface
}

export default function ProjectCard({ project, lang, dict }: ProjectCardProps) {
  // dict is available for future aria labels etc.
  void dict

  const formattedDate = new Date(project.date).toLocaleDateString(
    lang === 'pt' ? 'pt-BR' : 'en-US',
    { year: 'numeric', month: 'short' },
  )

  return (
    <Link
      href={`/${lang}/projects/${project.slug}`}
      className="group flex flex-col h-full rounded-xl border p-5 transition-all duration-200
        border-neutral-200 bg-white hover:border-amber-400/60 hover:bg-neutral-50 hover:shadow-sm
        dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-amber-400/50 dark:hover:bg-neutral-800/70"
    >
      {/* Date */}
      <p
        className="text-xs font-mono flex items-center gap-1.5 mb-3
        text-neutral-400 dark:text-neutral-500"
      >
        <IconCalendar size={12} />
        {formattedDate}
      </p>

      {/* Title */}
      <h3
        className="text-base font-semibold mb-2 transition-colors group-hover:text-amber-500
        text-neutral-800 dark:text-neutral-100 dark:group-hover:text-amber-400"
      >
        {project.title[lang]}
      </h3>

      {/* Description */}
      <p
        className="text-sm leading-relaxed flex-1 line-clamp-3
        text-neutral-500 dark:text-neutral-400"
      >
        {project.description[lang]}
      </p>

      {/* Tags */}
      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full text-xs font-mono border transition-colors
                bg-neutral-100 text-neutral-500 border-neutral-200 group-hover:border-neutral-300
                dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-700 dark:group-hover:border-neutral-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Arrow */}
      <div className="flex justify-end mt-4">
        <IconArrowRight
          size={16}
          className="transition-all group-hover:translate-x-1 group-hover:text-amber-500
            text-neutral-300 dark:text-neutral-600 dark:group-hover:text-amber-400"
        />
      </div>
    </Link>
  )
}
