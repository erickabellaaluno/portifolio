'use client'

import { logoutAction } from '@/actions/logout'
import { useRouter } from 'next/navigation'

export interface LogoutButtonProps {
  children: React.ReactNode
}

export default function LogoutButton({ children }: LogoutButtonProps) {
  const router = useRouter()

  async function handleLogout() {
    await logoutAction()
    router.refresh()
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors hover:cursor-pointer"
    >
      {children}
    </button>
  )
}
