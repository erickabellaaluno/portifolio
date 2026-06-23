# Erick Bilhalba Abella — Portfólio

> [Acesse o Site](https://portifolio-erickabella.vercel.app/)

Portfólio acadêmico da disciplina de **Algoritmos e Programação** — [Universidade Federal do Pampa](https://unipampa.edu.br) (Campus Alegrete).

Construído com Next.js, Tailwind CSS e TypeScript. O site expõe trabalhos do curso via rotas dinâmicas e uma pequena API interna.

---

## 🚀 Visão rápida

- **Internacionalização (pt / en)** com redirecionamento automático.
- **Tema claro/escuro** com `next-themes`.
- **API**: `GET /api/projects` e `GET /api/projects/:slug`.
- **Sem biblioteca de UI**: componentes personalizados com Tailwind.

---

## ➕ Como adicionar um novo trabalho

1. Edite o arquivo `src/db/projects/index.ts` e adicione um novo item em `primitiveProjects`. Exemplo:

```ts
{
  slug: 'meu-trabalho', // URL: /pt/projects/meu-trabalho
  title: { en: 'My Work', pt: 'Meu Trabalho' },
  date: '2026-06-22',    // ISO 8601
  tags: ['python'],
  githubUrl: 'https://github.com/seuusuario/meu-trabalho', // opcional
  classroomUrl: 'https://classroom.google.com/...',       // opcional
}
```

2. Crie as descrições em Markdown em `src/db/projects/descriptions/` com o padrão `{{slug}}.pt.md` e `{{slug}}.en.md`.

3. (Opcional) Rode `npm run lint` para verificar validações locais. O `prebuild` também executa `src/scripts/validate-projects.ts` antes do `build`.

---

## 🔌 API

- `GET /api/projects` — retorna a lista completa com descrições em ambos os idiomas.
- `GET /api/projects/:slug` — retorna um único trabalho ou `404`.

---

## ✅ Testes & validação

- Testes: use `npm run test:unit`, `npm run test:integration` ou `npm run test:e2e` conforme necessário.
- Validação de projetos: `src/scripts/validate-projects.ts` é executado automaticamente antes do `build`.
- Linting e Tipagem: `ǹpm run lint`
