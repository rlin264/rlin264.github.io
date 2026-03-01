// src/components/BlogList/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <header>
            <div className="site-name">LinBox</div>
            <p className="bio-text">
                An infinitesimally small piece of the internet for my personal thoughts and miscellaneous writings.
            </p>
            <div className="bio-links">
                <a
                    href="https://github.com/rlin264"
                    className="bio-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub &rarr;
                </a>
                <a
                    href="https://linkedin.com/in/rlin264"
                    className="bio-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn &rarr;
                </a>
            </div>
        </header>
    );
};

export default HeroSection;
