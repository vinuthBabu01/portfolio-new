import React from 'react';
import { personalInfo } from '../data/portfolioData.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-primary-bg py-8 text-center">
      <div className="absolute top-0 left-0 right-0 h-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #1a1a2e 0%, transparent 100%)' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-text-primary">
          Designed and Built by {personalInfo.name}
        </p>
        <p className="mt-2 text-xs font-mono text-text-secondary">
          © {currentYear} Vinuth Kalmidi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
