import { DictionaryType } from '@/i18n/dictionaries'
import { IconBrandGithub } from '@tabler/icons-react'
import Link from 'next/link'

interface FooterProps {
  dict: DictionaryType
}

export default function Footer({ dict }: FooterProps) {
  return (
    <footer
      className="border-t py-8
      border-neutral-200 bg-neutral-50
      dark:border-neutral-800 dark:bg-transparent"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm  text-neutral-400 dark:text-neutral-500">
        <p className="flex items-center gap-2">
          <Link
            href="https://github.com/erickabellaaluno/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
          >
            <IconBrandGithub size={18} />
          </Link>
          <Link
            href="https://www.instagram.com/the.devick"
            className="underline hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
          >
            Erick Bilhalba Abella
          </Link>{' '}
          · Unipampa Alegrete
        </p>
        <p className="text-xs transition-colors">{dict.footer.built}</p>
      </div>
    </footer>
  )
}
