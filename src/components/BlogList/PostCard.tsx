// src/components/BlogList/PostCard.tsx
import React from 'react';
import NavLink from '../shared/NavLink';
import type { BlogPost } from '@/types/blog';

interface PostCardProps {
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <NavLink to={`/post/${post.slug}`} className="block">
      <article className="card group hover:shadow-lg transition-all duration-300 cursor-pointer">
        <header className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
            {post.title}
          </h2>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <time dateTime={post.date} className="flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {post.author}
              </span>
            )}
          </div>
        </header>
        
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag: string) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <p className="text-gray-600 mb-6 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-all duration-200">
          Read more
          <svg className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </article>
    </NavLink>
  );
};

export default PostCard;
