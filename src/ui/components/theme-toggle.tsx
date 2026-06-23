import { DictionaryInterface } from '@/i18n/dictionaries'
import { IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface ThemeToggleProps {
  dict: DictionaryInterface
}
export default function ThemeToggle({ dict }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      suppressHydrationWarning
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={dict.theme.toggle}
      className="p-2 rounded-lg transition-colors text-neutral-500 hover:text-amber-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-amber-400 dark:hover:bg-neutral-800"
    >
      {theme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
    </button>
  )
}
