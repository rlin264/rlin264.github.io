// src/components/BlogList/PostsGrid.tsx
import React from 'react';
import type { BlogPost } from '@/types/blog';
import PostCard from './PostCard';

interface PostsGridProps {
  posts: BlogPost[];
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
      {posts.map((post: BlogPost) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default PostsGrid;
