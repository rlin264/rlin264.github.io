// src/components/BlogPostWrapper/PostNotFound.tsx
import React from 'react';
import NavLink from '../shared/NavLink';

const PostNotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Post not found</h2>
        <p className="text-gray-600 mb-6">The post you're looking for doesn't exist.</p>
        <NavLink to="/" className="btn-primary">
          ← Back to home
        </NavLink>
      </div>
    </div>
  );
};

export default PostNotFound;
