import { ListProjectResultType } from '@/core/projects.repository'
import { IconEye } from '@tabler/icons-react'
import Link from 'next/link'

export default function ViewProjectButton({
  project,
  lang,
}: {
  project: ListProjectResultType
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
