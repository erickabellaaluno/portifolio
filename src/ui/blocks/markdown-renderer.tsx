import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import remarkGfm from 'remark-gfm'

interface MarkdownRendererProps {
  content: string
}

const schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), 'iframe', 'object', 'embed'],
  attributes: {
    ...defaultSchema.attributes,

    iframe: ['src', 'width', 'height', 'title', 'allow', 'loading', 'style'],

    object: ['data', 'type', 'width', 'height', 'style'],

    embed: ['src', 'type', 'width', 'height', 'style'],
  },
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeSanitize, schema]]}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
