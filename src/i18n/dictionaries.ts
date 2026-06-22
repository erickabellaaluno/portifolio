export type Locale = 'en' | 'pt'

export type DictionaryType = {
  nav: {
    home: string
    works: string
  }
  hero: {
    greeting: string
    role: string
    university: string
    bio: string
    subject: string
  }
  works: {
    title: string
    subtitle: string
    github: string
    classroom: string
    back: string
    noWorks: string
  }
  footer: {
    built: string
  }
  theme: {
    toggle: string
  }
  locale: {
    switch: string
  }
}

export const locales: Locale[] = ['en', 'pt']
export const defaultLocale: Locale = 'pt'

const dictionaries: { en: DictionaryType; pt: DictionaryType } = {
  en: {
    nav: {
      home: 'Home',
      works: 'Works',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Electrical Engineering Student',
      university: 'Universidade Federal do Pampa — Alegrete Campus',
      bio: 'Electrical Engineering student and founder of Abella Bilhalba Engenharia — an electrical engineering company operating on the Brazil–Uruguay border, specialising in industrial panels, solar energy, and electrical projects.',
      subject:
        'This portfolio collects my works for the Algorithms & Programming course.',
    },
    works: {
      title: 'Works',
      subtitle: 'Algorithms & Programming · Electrical Engineering',
      github: 'View on GitHub',
      classroom: 'Open in Classroom',
      back: 'Back to Works',
      noWorks: 'No works found.',
    },
    footer: {
      built: 'Built with Next.js & Tailwind CSS',
    },
    theme: {
      toggle: 'Toggle theme',
    },
    locale: {
      switch: 'Português',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      works: 'Trabalhos',
    },
    hero: {
      greeting: 'Olá, sou',
      role: 'Estudante de Engenharia Elétrica',
      university: 'Universidade Federal do Pampa — Campus Alegrete',
      bio: 'Estudante de Engenharia Elétrica e fundador da Abella Bilhalba Engenharia — empresa que atua na fronteira Brasil–Uruguai com foco em quadros industriais, energia solar e projetos elétricos.',
      subject:
        'Este portfólio reúne meus trabalhos da disciplina de Algoritmos e Programação.',
    },
    works: {
      title: 'Trabalhos',
      subtitle: 'Algoritmos e Programação · Engenharia Elétrica',
      github: 'Ver no GitHub',
      classroom: 'Abrir no Classroom',
      back: 'Voltar para Trabalhos',
      noWorks: 'Nenhum trabalho encontrado.',
    },
    footer: {
      built: 'Feito com Next.js & Tailwind CSS',
    },
    theme: {
      toggle: 'Alternar tema',
    },
    locale: {
      switch: 'English',
    },
  },
} as const

export function getDictionary(locale: Locale): DictionaryType {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}
