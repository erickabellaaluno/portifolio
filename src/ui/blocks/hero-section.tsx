import { DictionaryInterface, LocaleType } from '@/i18n/dictionaries'
import UnipampaHorizontal from '@/images/unipampa/horizontal'
import { IconBuilding, IconMapPin } from '@tabler/icons-react'

interface HeroSectionProps {
  lang: LocaleType
  dict: DictionaryInterface
}

export default function HeroSection({ dict }: HeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden border-b
      border-neutral-200 dark:border-neutral-800"
    >
      {/* Ambient circuit grid — subtle in light, more visible in dark */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #f59e0b 1px, transparent 1px), linear-gradient(to bottom, #f59e0b 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Amber glow */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl pointer-events-none
          bg-amber-400/5 dark:bg-amber-400/10"
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          {/* Text */}
          <div className="flex-1">
            <p
              className="font-mono text-sm tracking-widest uppercase mb-3
              text-amber-500 dark:text-amber-400"
            >
              {dict.hero.greeting}
            </p>

            <h1
              className="text-4xl sm:text-6xl font-bold mb-1 relative inline-block
              text-neutral-900 dark:text-neutral-100"
            >
              Erick
              <br />
              <span className="relative">
                Bilhalba Abella
                <span
                  aria-hidden
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-linear-to-r from-amber-400 via-amber-300 to-transparent"
                />
              </span>
            </h1>

            <p
              className="mt-6 text-sm font-medium flex items-center gap-2
              text-neutral-600 dark:text-neutral-400"
            >
              <IconBuilding
                size={15}
                className="text-amber-500 dark:text-amber-400 shrink-0"
              />
              {dict.hero.role}
            </p>

            <p
              className="mt-1 text-sm flex items-center gap-2
              text-neutral-600 dark:text-neutral-400"
            >
              <IconMapPin
                size={15}
                className="text-amber-500 dark:text-amber-400 shrink-0"
              />
              {dict.hero.university}
            </p>

            <p
              className="mt-5 text-base leading-relaxed max-w-xl
              text-neutral-700 dark:text-neutral-300"
            >
              {dict.hero.bio}
            </p>

            <p
              className="mt-3 text-sm leading-relaxed max-w-xl
              text-neutral-500 dark:text-neutral-500"
            >
              {dict.hero.subject}
            </p>
          </div>

          {/* Unipampa logo card */}
          <div
            className="shrink-0 flex flex-col items-center gap-3 p-1 rounded-2xl backdrop-blur-sm border
            border-neutral-200 bg-neutral-50/80
            dark:border-neutral-800 dark:bg-neutral-900/60 w-96"
          >
            <UnipampaHorizontal />
            <span className="text-xs font-mono text-center leading-tight text-neutral-500 dark:text-neutral-500 p-4">
              {dict.hero.university}
              <br />
              {dict.hero.role}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
