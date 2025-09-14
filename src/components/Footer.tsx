// src/components/Footer.tsx
import React from 'react';
import GitHubLink from './shared/GitHubLink';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-gray-600 mb-2">
              &copy; 2024 LinBox. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built with React, Vite, Tailwind CSS, and ❤️
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <GitHubLink 
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200 flex items-center space-x-2"
            />
            
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span>Powered by</span>
              <div className="flex items-center space-x-1">
                <span className="text-red-500">♥</span>
                <span>and</span>
                <span className="text-blue-500 font-semibold">Vite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
