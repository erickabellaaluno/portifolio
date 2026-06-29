import { projectsRepository } from '@/core/projects.repository'
import { readFile } from 'fs/promises'
import path from 'path'

export async function readContent(slug: string): Promise<{
  en: string
  pt: string
}> {
  const baseDir = path.join(process.cwd(), 'src', 'db', 'seed', 'contents')

  const [en, pt] = await Promise.all([
    readFile(path.join(baseDir, `${slug}.en.md`), 'utf8'),
    readFile(path.join(baseDir, `${slug}.pt.md`), 'utf8'),
  ])

  return {
    en,
    pt,
  }
}

export async function seedProjects() {
  const projects = [
    {
      description: {
        en: 'Select and solve 15 algorithm or logic exercises from provided materials or generated with AI; submit the list and complete solutions.',
        pt: 'Escolher e resolver 15 exercícios de lógica ou algoritmos a partir de materiais fornecidos ou gerados por IA; entregar a lista e as soluções completas.',
      },
      slug: 'lista-15-exercicios',
      title: {
        en: '15 Exercises — Choose and Solve',
        pt: 'Lista de 15 exercícios: Escolher e resolver',
      },
      date: '2026-03-31',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODU3OTMyNTMyNjI1/details/',
    },
    {
      description: {
        en: 'Work through 10 exercises from the in-class Claude.ai booklet, implementing solutions in Python and documenting results.',
        pt: 'Resolver 10 exercícios da apostila gerada em aula (Claude.ai), implementando as soluções em Python e documentando os resultados.',
      },
      slug: 'lista-10-exercicios-claude',
      title: {
        en: '10 Exercises from "Introduction to Algorithms with Python" (by Claude.ai)',
        pt: 'Lista de 10 Exercícios da Introdução a Algoritmos com Python by Claude.ai',
      },
      date: '2026-04-10',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk2OTk2MzY4ODI0/details/',
    },
    {
      description: {
        en: 'Use multiple LLMs to generate algorithm exercises for engineering domains, compare outputs and deliver a qualitative evaluation.',
        pt: 'Usar várias LLMs para gerar exercícios de algoritmos aplicados a áreas de engenharia, comparar os resultados e entregar uma avaliação qualitativa.',
      },
      slug: 'geracao-avaliacao-exercicios-algoritmos-llms',
      title: {
        en: 'Generation and Evaluation of Algorithm Exercises with LLMs',
        pt: 'Geração e Avaliação de Exercícios de Algoritmos com LLMs',
      },
      date: '2026-04-10',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODU4NTI5NjQyNzU0/details/',
    },
    {
      description: {
        en: 'Manually solve five exercises on paper, digitize the solutions, request evaluations from LLMs and compare the generated code.',
        pt: 'Resolver cinco exercícios manualmente em papel, digitalizar as soluções, solicitar avaliações a LLMs e comparar o código gerado.',
      },
      slug: 'resolver-5-exercicios-papel',
      title: {
        en: 'Solve the 5 Exercises on Paper',
        pt: 'Resolver os 5 exercícios em papel',
      },
      date: '2026-04-21',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3MjMyNjQ5OTYz/details',
    },
    {
      description: {
        en: 'Implement and run Python solutions for list/vector/array exercises and provide evidence of execution (screenshots or photos).',
        pt: 'Implementar e executar soluções em Python para exercícios de listas/vetores/arrays e fornecer evidências da execução (prints ou fotos).',
      },
      slug: 'exercicios-listas-vetores-arrays-python',
      title: {
        en: 'Lists / Vectors / Arrays Exercises in Python',
        pt: 'Resolver os exercícios de listas/vetores/arrays em Python',
      },
      date: '2026-04-24',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3MjM1NDcyNTQ0/details/',
    },
    {
      description: {
        en: 'Use LLMs to help formulate two vector/list problems contextualized to your engineering area, then solve them manually and submit handwritten solutions.',
        pt: 'Usar LLMs para formular dois problemas com vetores/listas contextualizados na sua área de engenharia, resolver manualmente e entregar as soluções manuscritas.',
      },
      slug: 'formulacao-resolucao-problemas-vetores-listas-llms',
      title: {
        en: 'Formulation and Resolution of Vector/List Problems using LLMs',
        pt: 'Formulação e Resolução de Problemas com Vetores/Listas usando LLMs Objetivo',
      },
      date: '2026-04-24',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3NDczMzk3Mzgy/details/',
    },
    {
      description: {
        en: 'Iterate on Python code versions to achieve visually meaningful results; document and submit the different versions produced during development.',
        pt: 'Iterar sobre versões de código Python até obter resultados visuais significativos; documentar e entregar as diferentes versões produzidas.',
      },
      slug: 'gerar-versoes-codigo',
      title: {
        en: 'Generate Code Versions for Visual Results',
        pt: 'Gerar as diferentes versões do código até ter resultados visuais interessantes e consistentes',
      },
      date: '2026-05-05',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODYzMDE2ODMyNDUy/details/',
    },
    {
      description: {
        en: 'Select a problem from another course and produce algorithmic solutions using at least three distinct approaches, with Python implementations.',
        pt: 'Selecionar um problema de outra disciplina e produzir soluções algorítmicas por meio de pelo menos três abordagens distintas, com implementações em Python.',
      },
      slug: 'problemas-outros-disciplinas',
      title: {
        en: 'Problems from Other Courses — Multi-approach Solutions',
        pt: 'Problemas de outras disciplinas – resolução em múltiplas abordagens',
      },
      date: '2026-05-08',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODYzNjU2NzEyMTk1/details/',
    },
    {
      description: {
        en: 'Choose one of two proposed engineering problems, implement a solution in Python and compare results produced by different LLMs.',
        pt: 'Escolher um dos dois problemas propostos, implementar a solução em Python e comparar os resultados gerados por diferentes LLMs.',
      },
      slug: 'escolher-entregar-problemas-engenharia',
      title: {
        en: 'Choose and Submit One of Two Proposed Engineering Problems',
        pt: 'escolher e entregar 1 dos dois problemas de engenharia propostos',
      },
      date: '2026-05-12',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODY0MTM1NzI0NTcx/details/',
    },
    {
      description: {
        en: 'Solve and submit the engineering problem not chosen previously; implement the solution and evaluate alternative approaches using LLMs.',
        pt: 'Resolver e entregar o problema de engenharia que não foi escolhido anteriormente; implementar a solução e avaliar abordagens alternativas com LLMs.',
      },
      slug: 'entregar-outro-problema-engenharia',
      title: {
        en: 'Submit the Other Engineering Problem from the Previous Class',
        pt: 'entregar o outro dos dois problemas de engenharia propostos da aula passada',
      },
      date: '2026-05-15',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3ODMwODA3ODA5/details',
    },
    {
      description: {
        en: 'Select and solve an engineering problem with LLM support; deliver code, documentation and visualizations demonstrating the solution.',
        pt: 'Selecionar e resolver um problema de engenharia com apoio de LLMs; entregar código, documentação e visualizações que demonstrem a solução.',
      },
      slug: 'escolher-resolver-problema-engenharia',
      title: {
        en: 'Choose and Solve an Engineering Problem',
        pt: 'Escolher e resolver um problema de engenharia',
      },
      date: '2026-05-19',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk3ODY4MDAzNTI3/details/',
    },
    {
      description: {
        en: 'Refine and improve the previous activity solution: provide updated code, visualizations, a summary of improvements and next steps.',
        pt: 'Aprimorar e evoluir a solução da atividade anterior: fornecer código atualizado, visualizações, resumo das melhorias e próximos passos.',
      },
      slug: 'evolucao-tecnica-solucao-atividade-anterior',
      title: {
        en: 'Technical Evolution of the Previous Activity Solution',
        pt: 'Evolução técnica da solução desenvolvida na atividade anterior',
      },
      date: '2026-05-22',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/ODY1NzkxMDYxODM4/details/',
    },
    {
      description: {
        en: 'Develop a modular monitoring solution, generate implementations using multiple LLMs and compare code modularity and quality.',
        pt: 'Desenvolver uma solução modular de monitoramento, gerar implementações com várias LLMs e comparar modularidade e qualidade do código.',
      },
      slug: 'modularizacao-codigo-avaliacao-llms',
      title: {
        en: 'Code Modularization and LLM Evaluation (in class)',
        pt: 'Modularização de Código e Avaliação de LLMs (em aula)',
      },
      date: '2026-06-09',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk4MTQzMjAxNjY2/details/',
    },
    {
      description: {
        en: 'Create AI-assisted Python tools or content (scripts, galleries, image/video processors) to enrich the Alegrete.org portal; include code and a short report.',
        pt: 'Criar ferramentas ou conteúdos em Python assistidos por IA (scripts, galerias, processadores de imagem/vídeo) para enriquecer o portal Alegrete.org; incluir código e um breve relatório.',
      },
      slug: 'desenvolvimento-assistido-ia-portal-alegrete',
      title: {
        en: 'AI-Assisted Development for the Alegrete.org Portal',
        pt: 'Desenvolvimento Assistido por IA para o Portal Alegrete.org',
      },
      date: '2026-06-16',
      tags: ['python'],
      classroomUrl:
        'https://classroom.google.com/c/Nzk2NTIwNDI4Nzg1/a/Nzk4MjE2NjI2NzM2/details/',
    },
  ]

  await projectsRepository.saveMany(
    await Promise.all(
      projects.map(async (project) => ({
        content: await readContent(project.slug),
        ...project,
      })),
    ),
  )
}
