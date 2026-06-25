import { ListProjectResultType } from '@/core/projects.repository'
import { DictionaryInterface } from '@/lib/dictionaries'
import { SessionType } from '@/lib/session/types'
import DeleteProjectButton from '@/ui/components/projects/admin-card/actions/delete-button'
import EditProjectButton from '@/ui/components/projects/admin-card/actions/edit-button'
import ViewProjectButton from '@/ui/components/projects/admin-card/actions/view-button'

interface ProjectActionsProps {
  project: ListProjectResultType
  dict: DictionaryInterface
  lang: string
  session: SessionType
}

export default function ProjectActions({
  project,
  dict,
  lang,
  session,
}: ProjectActionsProps) {
  return (
    <div className="flex gap-2 ml-4">
      <ViewProjectButton project={project} lang={lang} />
      <EditProjectButton project={project} lang={lang} />
      <DeleteProjectButton project={project} dict={dict} session={session} />
    </div>
  )
}
