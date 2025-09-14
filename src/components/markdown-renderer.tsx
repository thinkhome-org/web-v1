import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-foreground">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="text-4xl font-extrabold mb-6">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-2xl font-bold mb-3 mt-8">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mb-2 mt-6">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="leading-relaxed mb-4">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside space-y-1 leading-relaxed mb-4">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside space-y-1 leading-relaxed mb-4">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="mb-1">{children}</li>
          ),
          strong: ({ children }) => (
            <strong className="font-bold">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-sm text-muted-foreground">{children}</em>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
              {children}
            </pre>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </main>
  );
};

export default MarkdownRenderer;