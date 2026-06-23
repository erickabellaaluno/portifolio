'use client'

import { DictionaryInterface, LocaleType } from '@/i18n/dictionaries'
import LocaleSwitcher from '@/ui/components/locale-switcher'
import ThemeToggle from '@/ui/components/theme-toggle'
import { IconCode } from '@tabler/icons-react'
import Link from 'next/link'

interface NavbarProps {
  lang: LocaleType
  dict: DictionaryInterface
}

export default function Navbar({ lang, dict }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-neutral-200 dark:bg-neutral-950/80 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${lang}`}
          className="flex items-center gap-2 font-mono font-semibold text-sm text-neutral-800 hover:text-amber-500 dark:text-neutral-100 dark:hover:text-amber-400 transition-colors"
        >
          <IconCode size={18} className="text-amber-500 dark:text-amber-400" />
          TheDevick
        </Link>

        <div className="flex items-center gap-3">
          <LocaleSwitcher lang={lang} dict={dict} />

          <ThemeToggle dict={dict} />
        </div>
      </div>
    </header>
  )
}
