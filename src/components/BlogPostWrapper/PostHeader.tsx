// src/components/BlogPostWrapper/PostHeader.tsx
import React from 'react';
import type { BlogPost } from '@/types/blog';
import { formatLongDate } from '@/utils/date';

interface PostHeaderProps {
  post: BlogPost;
}

const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
  return (
    <div className="post-meta">
      <h1 className="post-title">{post.title}</h1>
      <div className="post-date">{formatLongDate(post.date)}</div>
      {post.tags && post.tags.length > 0 && (
        <div className="post-tags">
          {post.tags.map((tag: string) => (
            <span key={tag} className="post-tag">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostHeader;
