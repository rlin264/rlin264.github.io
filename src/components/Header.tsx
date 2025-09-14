// src/components/Header.tsx
import React from 'react';
import NavLink from './shared/NavLink';
import GitHubLink from './shared/GitHubLink';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink 
            to="/"
            className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg px-2 py-1"
          >
            LinBox
          </NavLink>
          
          <div className="flex items-center space-x-6">
            <NavLink 
              to="/" 
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg px-2 py-1"
            >
              Home
            </NavLink>
            <GitHubLink />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
