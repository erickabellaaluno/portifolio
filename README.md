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

1. Instale dependências:

```bash
npm install
```

2. Crie o banco de dados e inicialize o container:

```bash
docker compose up -d
```

3. Gere arquivos do Drizzle e rode o seed:

```bash
npx drizzle-kit generate
npm run seed
```

4. Inicie o app em desenvolvimento:

```bash
npm run dev
```

Abra `http://localhost:3000` e o app redirecionará para `/pt` ou `/en` conforme o idioma do navegador.

---

## 🔌 API

- `GET /api/projects` — retorna a lista de projetos.
- `GET /api/projects/:slug` — retorna um projeto específico ou `404`.

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
