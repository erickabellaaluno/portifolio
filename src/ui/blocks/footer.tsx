import { DictionaryType } from '@/i18n/dictionaries'
import { IconHeart } from '@tabler/icons-react'
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p
          className="flex items-center gap-2
          text-neutral-500 dark:text-neutral-500"
        >
          <IconHeart size={14} className="text-amber-500 dark:text-amber-400" />
          <Link
            href="https://www.instagram.com/the.devick"
            className="underline hover:text-neutral-600 dark:hover:text-neutral-600"
          >
            Erick Bilhalba Abella
          </Link>{' '}
          · Unipampa Alegrete
        </p>
        <p className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
          {dict.footer.built}
        </p>
      </div>
    </footer>
  )
}
