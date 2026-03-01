// src/components/BlogList.tsx
import React, { useState } from 'react';
import type { BlogListProps } from '@/types/blog';
import {
  HeroSection,
  LoadingState,
  ErrorState,
  EmptyState,
  PostsGrid
} from './BlogList/index';

const BlogList: React.FC<BlogListProps> = ({ posts, loading, error }) => {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const handleRetry = () => {
    window.location.reload();
  };

  const allTags = Array.from(
    new Set(posts.flatMap(p => p.tags ?? []))
  ).sort();

  return (
    <div className="dispatch-home">
      <HeroSection />

      {loading && <LoadingState />}
      {error && <ErrorState error={error} onRetry={handleRetry} />}
      {!loading && !error && !posts.length && <EmptyState />}

      {!loading && !error && posts.length > 0 && (
        <>
          <hr className="divider" />
          <PostsGrid posts={posts} allTags={allTags} activeTag={activeTag} onTagChange={setActiveTag} />
        </>
      )}
    </div>
  );
};

export default BlogList;
