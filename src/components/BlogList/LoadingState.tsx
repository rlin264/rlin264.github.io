// src/components/BlogList/LoadingState.tsx
import React from 'react';

const LoadingState: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-16">
      <div className="text-center">
        <div className="loading-spinner mx-auto"></div>
        <p className="mt-4 text-gray-600 font-medium">Loading posts...</p>
      </div>
    </div>
  );
};

export default LoadingState;
