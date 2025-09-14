// src/components/BlogList.tsx
import React from 'react';
import type { BlogListProps } from '@/types/blog';
import { 
  HeroSection, 
  LoadingState, 
  ErrorState, 
  EmptyState, 
  PostsGrid 
} from './BlogList/index';

const BlogList: React.FC<BlogListProps> = ({ posts, loading, error }) => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section - Always visible */}
        <HeroSection />

        {/* Loading State */}
        {loading && <LoadingState />}

        {/* Error State */}
        {error && <ErrorState error={error} onRetry={handleRetry} />}

        {/* No Posts State */}
        {!loading && !error && !posts.length && <EmptyState />}

        {/* Posts Grid - Only show when we have posts */}
        {!loading && !error && posts.length > 0 && <PostsGrid posts={posts} />}
      </div>
    </div>
  );
};

export default BlogList;