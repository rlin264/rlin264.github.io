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
    <div className="post-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
          code: ({ children, className }) => {
            const isInline = !className;
            return isInline
              ? <code>{children}</code>
              : <code className={className}>{children}</code>;
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </div>
  );
};

export default PostContent;
