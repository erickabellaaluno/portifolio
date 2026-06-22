# Erick Bilhalba Abella — Portfólio

Portfólio acadêmico da disciplina de **Algoritmos e Programação** na [Universidade Federal do Pampa](https://unipampa.edu.br) — Campus Alegrete, Engenharia Elétrica.

Criado usando NextJs, Tailwind, Typescript, Tabler Icons e Next Themes

---

## ✨ Funcionalidades

- **Internacionalização (PT / EN)** — i18n nativo do Next.js com detecção automática do idioma do navegador; as rotas são prefixadas com `/pt` ou `/en`
- **Tema claro / escuro** — gerenciado pelo `next-themes`.
- **Dados estáticos** — sem banco de dados; todos os trabalhos ficam em um único arquivo TypeScript (`src/db/projects.ts`)
- **API REST** — dois endpoints para consumir os dados dos trabalhos
- **Tabler Icons** — todos os ícones vêm do `@tabler/icons-react`, nenhuma outra biblioteca de ícones
- **Sem biblioteca de UI** — todos os componentes são feitos à mão com Tailwind CSS
- **Totalmente tipado** — TypeScript em todo o projeto.

---

## 🚀 Como Rodar

### Instalar dependências

```bash
git clone https://github.com/erickabellaaluno/portifolio.git
cd portifolio
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) — você será redirecionado para `/pt` ou `/en` conforme o idioma do seu navegador.

### Build para produção

```bash
npm run build
npm start
```

---

## ➕ Adicionando um Novo Trabalho

Todos os trabalhos ficam em **`src/db/projects.ts`**. Adicione uma nova entrada no array `projects`:

```ts
{
  slug: "meu-trabalho",         // Usado na URL: /pt/projects/meu-trabalho
  title: {
    en: "My Work",
    pt: "Meu Trabalho",
  },
  description: {
    en: "Short description in English.",
    pt: "Descrição curta em português.",
  },
  date: "2024-06-01",           // ISO 8601
  tags: ["C", "Algoritmos"],
  githubUrl: "https://github.com/seuusuario/meu-trabalho",   // opcional
  classroomUrl: "https://classroom.google.com/...",          // opcional
},
```

---

## 🔌 API REST

Dois endpoints disponíveis, úteis para integrações ou consultas rápidas.

### `GET /api/projects`

Retorna todos os trabalhos.

```json
{
  "data": [
    {
      "slug": "bubble-sort",
      "title": { "en": "Bubble Sort", "pt": "Ordenação por Bolha" },
      "description": { "en": "...", "pt": "..." },
      "date": "2024-04-02",
      "tags": ["C", "Ordenação", "Algoritmos"],
      "githubUrl": "https://github.com/...",
      "classroomUrl": "https://classroom.google.com/..."
    }
  ]
}
```

### `GET /api/projects/:slug`

Retorna um trabalho pelo slug, ou `404` se não encontrado.

```json
{
  "data": { ... }
}
```

```json
{ "error": "Project not found" }   // 404
```

---

*Apoio: Abella Bilhalba Engenharia — Serviços em Engenharia Elétrica.*
