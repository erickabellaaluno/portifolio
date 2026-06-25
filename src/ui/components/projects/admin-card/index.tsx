import { contract } from '@/core/rest/contract'
import { DictionaryInterface } from '@/lib/dictionaries'
import { SessionType } from '@/lib/session/types'
import ProjectActions from '@/ui/components/projects/admin-card/actions'
import { ClientInferResponseBody } from '@ts-rest/core'

export default function AdminProjectCard({
  project,
  dict,
  lang,
  session,
}: {
  project: ClientInferResponseBody<
    typeof contract.projects.list,
    200
  >['data'][number]
  dict: DictionaryInterface
  lang: string
  session: SessionType
}) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          {lang === 'pt' ? project.title.pt : project.title.en}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
          {lang === 'pt' ? project.description.pt : project.description.en}
        </p>
        <div className="flex gap-2 mt-2 flex-wrap">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <ProjectActions
        session={session}
        project={project}
        dict={dict}
        lang={lang}
      />
    </div>
  )
}
