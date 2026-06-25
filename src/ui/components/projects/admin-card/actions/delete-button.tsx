'use client'

import { DictionaryInterface } from '@/lib/dictionaries'
import bearer from '@/lib/session/bearer'
import { SessionType } from '@/lib/session/types'
import { apiClient } from '@/rest/client'
import { contract } from '@/rest/contract'
import { IconLoader2, IconTrash } from '@tabler/icons-react'
import { ClientInferResponseBody } from '@ts-rest/core'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DeleteProjectButton({
  project,
  dict,
  session,
}: {
  project: ClientInferResponseBody<
    typeof contract.projects.list,
    200
  >['data'][number]
  dict: DictionaryInterface
  session: SessionType
}) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm(dict.admin.projects.confirmDelete)) return

    setIsDeleting(true)
    const result = await apiClient.projects.destroy({
      headers: { authorization: bearer(session.token) },
      params: { slug: project.slug },
    })

    if (result.status === 200) {
      router.refresh()
    }

    if (result.status === 404) {
      alert(dict.admin.projects.notFound)
    }

    if (result.status !== 200) {
      alert(dict.errors.systemError)
    }

    setIsDeleting(false)
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 transition-colors text-sm hover:cursor-pointer"
    >
      {isDeleting ? <IconLoader2 className="animate-spin" /> : <IconTrash />}
    </button>
  )
}
