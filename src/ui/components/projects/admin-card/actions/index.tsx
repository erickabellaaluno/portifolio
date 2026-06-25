import { DictionaryInterface } from '@/lib/dictionaries'
import { SessionType } from '@/lib/session/types'
import { contract } from '@/rest/contract'
import DeleteProjectButton from '@/ui/components/projects/admin-card/actions/delete-button'
import EditProjectButton from '@/ui/components/projects/admin-card/actions/edit-button'
import ViewProjectButton from '@/ui/components/projects/admin-card/actions/view-button'
import { ClientInferResponseBody } from '@ts-rest/core'

interface ProjectActionsProps {
  project: ClientInferResponseBody<
    typeof contract.projects.list,
    200
  >['data'][number]
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
