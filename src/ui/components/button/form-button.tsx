'use client'

import {
  IconArrowRight,
  IconCircleCheck,
  IconLoader2,
} from '@tabler/icons-react'

export default function FormButton({
  children,
  isSubmitting,
  isSubmitSuccessful,
}: {
  children: React.ReactNode
  isSubmitting: boolean
  isSubmitSuccessful: boolean
}) {
  return (
    <button
      disabled={isSubmitting || isSubmitSuccessful}
      className="w-full cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      type="submit"
    >
      {children}
      {isSubmitting ? (
        <IconLoader2 className="h-5 w-5 animate-spin" />
      ) : isSubmitSuccessful ? (
        <IconCircleCheck className="h-5 w-5 text-green-400" />
      ) : (
        <IconArrowRight className="h-5 w-5" />
      )}
    </button>
  )
}
