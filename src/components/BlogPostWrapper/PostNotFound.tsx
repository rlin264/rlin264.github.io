// src/components/BlogPostWrapper/PostNotFound.tsx
import React from 'react';
import NavLink from '../shared/NavLink';

const PostNotFound: React.FC = () => {
  return (
    <div className="dispatch-not-found">
      <div>post not found</div>
      <NavLink to="/" className="not-found-back">
        &larr; back to all posts
      </NavLink>
    </div>
  );
};

export default PostNotFound;
