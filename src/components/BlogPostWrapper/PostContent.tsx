// src/components/BlogPostWrapper/PostContent.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { BlogPost } from '@/types/blog';

interface PostContentProps {
  post: BlogPost;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
  return (
    <div className="px-8 py-12">
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>
            ),
            p: ({ children }) => (
              <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
            ),
            code: ({ children, className }) => {
              const isInline = !className;
              return isInline ? (
                <code className="bg-gray-100 text-pink-600 px-1.5 py-0.5 rounded text-sm font-mono">
                  {children}
                </code>
              ) : (
                <code className={className}>{children}</code>
              );
            },
            pre: ({ children }) => (
              <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto mb-6">
                {children}
              </pre>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-primary-500 pl-6 py-2 mb-6 bg-primary-50 text-gray-700 italic">
                {children}
              </blockquote>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed">{children}</li>
            ),
            a: ({ href, children }) => (
              <a 
                href={href} 
                className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors duration-200" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-gray-900">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic text-gray-700">{children}</em>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default PostContent;
