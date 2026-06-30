import 'highlight.js/styles/github-dark.css'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

interface MarkdownRendererProps {
  content: string
}

const schema = {
  ...defaultSchema,
  tagNames: [
    ...(defaultSchema.tagNames ?? []),
    'iframe',
    'object',
    'embed',
    'span',
  ],
  attributes: {
    ...defaultSchema.attributes,

    iframe: ['src', 'width', 'height', 'title', 'allow', 'loading', 'style'],

    object: ['data', 'type', 'width', 'height', 'style'],

    embed: ['src', 'type', 'width', 'height', 'style'],

    code: [...(defaultSchema.attributes?.code ?? []), 'className'],

    span: ['className'],
  },
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight, [rehypeSanitize, schema]]}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
