// src/components/BlogPostWrapper/PostHeader.tsx
import React from 'react';
import type { BlogPost } from '@/types/blog';

interface PostHeaderProps {
  post: BlogPost;
}

const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
  return (
    <header className="px-8 py-12 border-b border-gray-200">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
        {post.title}
      </h1>
      
      <div className="flex flex-wrap items-center text-sm text-gray-500 space-x-6 mb-6">
        <time dateTime={post.date} className="flex items-center">
          <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        {post.author && (
          <span className="flex items-center">
            <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {post.author}
          </span>
        )}
      </div>
      
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag: string) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
};

export default PostHeader;
