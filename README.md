# Erick Bilhalba Abella — Portfólio

> [Acesse o Site](https://portifolio-erickabella.vercel.app/)

Portfólio acadêmico da disciplina de **Algoritmos e Programação** — [Universidade Federal do Pampa](https://unipampa.edu.br) (Campus Alegrete).

Construído com Next.js, Tailwind CSS, PostgreSQL e Drizzle ORM. O site exibe projetos do curso e uma API Rest.

---

## 🚀 Visão rápida

- **Internacionalização**: suporte a `/pt` e `/en`.
- **Tema claro/escuro**: controlado por `next-themes`.
- **Banco de dados**: Postgres via Docker e Drizzle ORM.
- **API**: `GET /api/projects` e `GET /api/projects/:slug`.
- **Renderização de markdown**: Descrições dos projetos renderizados de Markdown para HTML.
- **Sem biblioteca de UI**: componentes personalizados com Tailwind CSS.

---

## 🔧 Como rodar

```bash
npm install
docker compose up -d
npm run db:migrate
npm run db:seed
npm run dev
```

Abra `http://localhost:3000` e o app redirecionará para `/pt` ou `/en` conforme o idioma do navegador.

---

## 🔌 API

A documentação completa está disponível em: `http://localhost:3000/api/docs`

- `POST /api/auth/login` — Autentica o usuário e retorna um JWT.
- `GET /api/projects` — Lista todos os projetos.
- `GET /api/projects/:slug` — Retorna um projeto específico.
- `POST /api/projects` — Cria um novo projeto (requer JWT).
- `PUT /api/projects/:slug` — Atualiza um projeto (requer JWT).
- `DELETE /api/projects/:slug` — Remove um projeto (requer JWT).

---

## 🌐 Internacionalização

A lógica de redirecionamento de idioma está em `src/proxy.ts`. As páginas são geradas sob o diretório `src/app/[lang]`, com suporte a `en` e `pt`.

---

## ✅ Testes e validação

- `npm run test:unit`
- `npm run test:integration`
- `npm run test:e2e`
- `npm run lint`

---

## ☑️ Todo

- [ ] Mudar o termo "descrição" por "conteúdo" nos projetos. E usar o termo "descrição" apenas para uma frase pequena, descrevendo por cima o projeto (Para listar)
