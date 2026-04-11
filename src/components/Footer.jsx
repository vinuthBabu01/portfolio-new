import React from 'react';
import { personalInfo } from '../data/portfolioData.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary-bg py-8 text-center">
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
