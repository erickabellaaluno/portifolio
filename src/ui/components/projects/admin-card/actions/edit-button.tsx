import { contract } from '@/rest/contract'
import { IconPencil } from '@tabler/icons-react'
import { ClientInferResponseBody } from '@ts-rest/core'
import Link from 'next/link'

export default function EditProjectButton({
  project,
  lang,
}: {
  project: ClientInferResponseBody<
    typeof contract.projects.list,
    200
  >['data'][number]
  lang: string
}) {
  return (
    <Link
      href={`/${lang}/admin/${project.slug}/edit`}
      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm"
    >
      <IconPencil />
    </Link>
  )
}
