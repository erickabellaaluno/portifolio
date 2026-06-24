export type LocaleType = 'en' | 'pt'

export const locales: LocaleType[] = ['en', 'pt']

export const defaultLocale: LocaleType = 'pt'

export interface DictionaryInterface {
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
  errors: {
    systemError: string
  }
  login: {
    title: string
    description: string
    email: string
    emailPlaceholder: string
    password: string
    error: {
      invalidCredentials: string
    }
  }
  admin: {
    title: string
    logout: string
    return: string
    projects: {
      new: string
      create: string
      empty: string
      confirmDelete: string
      notFound: string
    }
  }
}

const dictionaries: { en: DictionaryInterface; pt: DictionaryInterface } = {
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
    errors: {
      systemError: 'A system error occurred. Please try again.',
    },
    login: {
      title: 'Sign in',
      description: 'Welcome back to your portfolio',
      error: {
        invalidCredentials: 'Invalid email or password.',
      },
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      password: 'Password',
    },
    admin: {
      title: 'Admin Panel',
      logout: 'Logout',
      return: '← Back to Admin',
      projects: {
        new: '+ New Project',
        create: 'Create New Project',
        empty: 'No projects yet. Create one to get started!',
        confirmDelete: 'Are you sure you want to delete this project?',
        notFound: 'Project not found',
      },
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
    errors: {
      systemError: 'Ocorreu um erro no sistema. Tente novamente.',
    },
    login: {
      title: 'Entrar',
      description: 'Bem vindo de volta ao seu portfólio',
      error: {
        invalidCredentials: 'Email ou senha inválidos.',
      },
      email: 'Email',
      emailPlaceholder: 'seu@email.com',
      password: 'Senha',
    },
    admin: {
      title: 'Painel do Administrador',
      logout: 'Sair',
      return: '← Voltar ao Painel',
      projects: {
        new: '+ Novo Projeto',
        create: 'Criar um Novo Projeto',
        empty: 'Sem projetos ainda. Crie um para iniciar!',
        confirmDelete: 'Você tem certeza que quer deletar esse projeto?',
        notFound: 'Project not found',
      },
    },
  },
} as const

export function getDictionary(locale: LocaleType): DictionaryInterface {
  return dictionaries[locale] ?? dictionaries[defaultLocale]
}
