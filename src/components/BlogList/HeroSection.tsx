// src/components/BlogList/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        LinBox
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Personal thoughts and technical writings about web development, technology, and life.
      </p>
    </div>
  );
};

export default HeroSection;
