import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { personalInfo, socialLinks } from '../data/portfolioData.jsx';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion as Motion } from 'framer-motion';

const navItems = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoFlipped, setIsLogoFlipped] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isLogoHovered) return;

    const flipDuration = 2000;  // time for the flip animation
    const stayDuration = 2500;  // time to stay on each face
    const totalCycle = stayDuration + flipDuration + stayDuration + flipDuration;

    let t1, t2;
    const startCycle = () => {
      t1 = setTimeout(() => {
        setIsLogoFlipped(true);
        t2 = setTimeout(() => {
          setIsLogoFlipped(false);
        }, flipDuration + stayDuration);
      }, stayDuration);
    };

    startCycle();
    const interval = setInterval(startCycle, totalCycle);
    return () => { clearTimeout(t1); clearTimeout(t2); clearInterval(interval); };
  }, [isLogoHovered]);

  return (
    <Motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-secondary-bg shadow-lg py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 flex justify-between items-center">
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer [perspective:400px]"
          onMouseEnter={() => { setIsLogoHovered(true); setIsLogoFlipped(true); }}
          onMouseLeave={() => { setIsLogoHovered(false); setIsLogoFlipped(false); }}
        >
          <div className="relative h-10 w-10">
            <div
              className={`relative h-full w-full logo-flipper [transition:transform_2000ms_ease-in-out] [transform-style:preserve-3d]${isLogoFlipped ? ' is-flipped' : ''}`}
            >
              <div className="absolute inset-0 flex items-center justify-center text-2xl [backface-visibility:hidden]">
                👨‍💻
              </div>
              <div className="absolute inset-0 flex items-center justify-center font-bold font-mono text-lg text-accent-1 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                VK
              </div>
            </div>
          </div>
        </ScrollLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70} // Adjust offset based on navbar height
              className="text-text-secondary hover:text-accent-1 font-mono transition-colors cursor-pointer"
              activeClass="text-accent-1"
              spy={true}
            >
              {item.name}
            </ScrollLink>
          ))}
          <div className="flex items-center gap-3 border-l border-white/10 pl-2">
            {Object.entries(socialLinks).map(([key, link]) => (
              <a
                key={key}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-colors hover:text-accent-1"
                aria-label={key}
              >
                {React.cloneElement(link.icon, { size: 18 })}
              </a>
            ))}
          </div>
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 font-mono border-2 border-accent-1 text-accent-1 rounded hover:bg-accent-1 hover:text-primary-bg transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-accent-1 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <Motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-secondary-bg mt-2 py-2"
        >
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="block px-4 py-3 text-text-secondary hover:text-accent-1 hover:bg-primary-bg font-mono transition-colors cursor-pointer"
              activeClass="text-accent-1 bg-primary-bg"
              spy={true}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </ScrollLink>
          ))}
          <div className="mx-4 mt-2 flex items-center gap-4 px-1 py-2">
            {Object.entries(socialLinks).map(([key, link]) => (
              <a
                key={key}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition-colors hover:text-accent-1"
                aria-label={key}
                onClick={() => setIsOpen(false)}
              >
                {React.cloneElement(link.icon, { size: 20 })}
              </a>
            ))}
          </div>
          <a
            href={personalInfo.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-2 mx-4 px-4 py-3 font-mono border-2 border-accent-1 text-accent-1 rounded hover:bg-accent-1 hover:text-primary-bg transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </Motion.div>
      )}
    </Motion.nav>
  );
};

export default Navbar;
