// src/components/BlogList/PostsGrid.tsx
import React from 'react';
import type { BlogPost } from '@/types/blog';
import PostCard from './PostCard';

interface PostsGridProps {
  posts: BlogPost[];
  allTags: string[];
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
}

const PostsGrid: React.FC<PostsGridProps> = ({ posts, allTags, activeTag, onTagChange }) => {
  const filtered = activeTag ? posts.filter(p => p.tags?.includes(activeTag)) : posts;

  return (
    <div>
      {allTags.length > 0 && (
        <div className="tag-filters">
          <button
            className={`tag-filter${activeTag === null ? ' active' : ''}`}
            onClick={() => onTagChange(null)}
          >
            all
          </button>
          {allTags.map(tag => (
            <button
              key={tag}
              className={`tag-filter${activeTag === tag ? ' active' : ''}`}
              onClick={() => onTagChange(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
      <div className="posts-header">
        <span>Subject</span>
        <span style={{ textAlign: 'right' }}>Date</span>
      </div>
      {filtered.map((post: BlogPost, index: number) => (
        <PostCard key={post.slug} post={post} index={index} />
      ))}
    </div>
  );
};

export default PostsGrid;
