import { DictionaryInterface, locales, LocaleType } from '@/lib/dictionaries'
import Link from 'next/link'

interface LocaleSwitcherProps {
  lang: LocaleType
  dict: DictionaryInterface
}

export default function LocaleSwitcher({ lang, dict }: LocaleSwitcherProps) {
  const otherLocale = locales.find((l) => l !== lang) as LocaleType
  return (
    <Link
      href={`/${otherLocale}`}
      className="text-xs font-mono px-2 py-1 rounded border transition-colors text-neutral-500 border-neutral-300 hover:text-amber-500 hover:border-amber-400 dark:text-neutral-400 dark:border-neutral-700 dark:hover:text-amber-400 dark:hover:border-amber-400"
    >
      {dict.locale.switch}
    </Link>
  )
}
