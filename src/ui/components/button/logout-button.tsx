'use client'

import { clearSession } from '@/lib/session'
import { useRouter } from 'next/navigation'

export interface LogoutButtonProps {
  children: React.ReactNode
}

export default function LogoutButton({ children }: LogoutButtonProps) {
  const router = useRouter()

  return (
    <button
      onClick={async () => {
        await clearSession()
        router.refresh()
      }}
    >
      {children}
    </button>
  )
}
