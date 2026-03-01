// src/components/BlogList/PostCard.tsx
import React from 'react';
import NavLink from '../shared/NavLink';
import type { BlogPost } from '@/types/blog';
import { formatRelativeDate } from '@/utils/date';
import { isRead } from '@/utils/readState';

interface PostCardProps {
  post: BlogPost;
  index: number;
}

const PostCard: React.FC<PostCardProps> = ({ post, index }) => {
  const tags = post.tags && post.tags.length > 0 ? post.tags.join(' \u00B7 ') : undefined;
  const unread = !isRead(post.slug);

  return (
    <NavLink
      to={`/posts/${post.slug}`}
      className="post-row"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div>
        <div className={`post-row-title${unread ? ' unread' : ''}`}>{post.title}</div>
        {tags && <div className="post-row-category">{tags}</div>}
      </div>
      <div className="post-row-date">{formatRelativeDate(post.date)}</div>
    </NavLink>
  );
};

export default PostCard;
