// src/components/BlogPostWrapper.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import type { BlogPost } from '@/types/blog';
import { PostNotFound, BackButton, PostHeader, PostContent } from './BlogPostWrapper/index';

interface BlogPostWrapperProps {
  posts: BlogPost[];
}

const BlogPostWrapper: React.FC<BlogPostWrapperProps> = ({ posts }) => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = posts.find(p => p.slug === slug);
  
  if (!post) {
    return <PostNotFound />;
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <BackButton />

        {/* Article */}
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Header */}
          <PostHeader post={post} />
          
          {/* Content */}
          <PostContent post={post} />
        </article>
      </div>
    </div>
  );
};

export default BlogPostWrapper;
