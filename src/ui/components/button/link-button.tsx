import Link from 'next/link'

export interface LinkButtonProps {
  href: string
  children: React.ReactNode
}

export default function LinkButton({ href, children }: LinkButtonProps) {
  return (
    // {project.githubUrl && (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 border
              bg-neutral-100 text-neutral-800 border-neutral-200 hover:bg-amber-400 hover:text-neutral-950 hover:border-amber-400
              dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700 dark:hover:bg-amber-400 dark:hover:text-neutral-950 dark:hover:border-amber-400"
    >
      {children}
    </Link>
  )
}
