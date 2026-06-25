import { contract } from '@/rest/contract'
import { IconEye } from '@tabler/icons-react'
import { ClientInferResponseBody } from '@ts-rest/core'
import Link from 'next/link'

export default function ViewProjectButton({
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
      href={`/${lang}/projects/${project.slug}`}
      className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 transition-colors text-sm"
    >
      <IconEye />
    </Link>
  )
}
