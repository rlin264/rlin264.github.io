// src/components/BlogPostWrapper/BackButton.tsx
import React from 'react';
import NavLink from '../shared/NavLink';

const BackButton: React.FC = () => {
  return (
    <div className="mb-8">
      <NavLink 
        to="/" 
        className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 group"
      >
        <svg className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to home
      </NavLink>
    </div>
  );
};

export default BackButton;
