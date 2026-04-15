import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/portfolioData.jsx';
import { FaDownload } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { motion as Motion } from 'framer-motion';

const heroParticles = [
  { left: '10%', top: '22%', size: 8, duration: 10, delay: 0, color: 'bg-accent-1/80' },
  { left: '22%', top: '68%', size: 10, duration: 12, delay: 1.2, color: 'bg-white/60' },
  { left: '38%', top: '34%', size: 6, duration: 9, delay: 0.8, color: 'bg-accent-1/70' },
  { left: '54%', top: '74%', size: 12, duration: 13, delay: 0.5, color: 'bg-white/50' },
  { left: '66%', top: '26%', size: 7, duration: 11, delay: 1.4, color: 'bg-accent-1/75' },
  { left: '78%', top: '60%', size: 9, duration: 10, delay: 0.3, color: 'bg-white/55' },
  { left: '86%', top: '18%', size: 6, duration: 8, delay: 1.1, color: 'bg-accent-1/80' },
  { left: '92%', top: '46%', size: 11, duration: 14, delay: 0.6, color: 'bg-white/45' },
];

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-primary-bg pt-0">
      <div className="absolute inset-0">
        <Motion.div
          aria-hidden="true"
          className="absolute left-[-18%] top-[18%] h-px w-[42rem] rotate-[10deg] bg-gradient-to-r from-transparent via-accent-1/80 to-transparent blur-[2px]"
          animate={{ x: [0, 80, 10, 0], opacity: [0.18, 0.7, 0.28, 0.18] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Motion.div
          aria-hidden="true"
          className="absolute right-[-16%] top-[58%] h-px w-[36rem] rotate-[-14deg] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-[2px]"
          animate={{ x: [0, -70, -10, 0], opacity: [0.14, 0.5, 0.22, 0.14] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
        <Motion.div
          aria-hidden="true"
          className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-accent-1/15 blur-3xl"
          animate={{ x: [0, 18, -10, 0], y: [0, -14, 10, 0], scale: [1, 1.05, 0.98, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Motion.div
          aria-hidden="true"
          className="absolute right-[-8%] top-32 h-80 w-80 rounded-full bg-accent-2/15 blur-3xl"
          animate={{ x: [0, -22, 10, 0], y: [0, 16, -12, 0], scale: [1, 0.97, 1.04, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Motion.div
          aria-hidden="true"
          className="absolute left-[12%] top-[56%] h-28 w-28 rounded-full border border-white/10 bg-white/[0.03] blur-2xl"
          animate={{ x: [0, 24, -12, 0], y: [0, -12, 16, 0], opacity: [0.14, 0.24, 0.16, 0.14] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Motion.div
          aria-hidden="true"
          className="absolute right-[18%] top-[22%] h-20 w-20 rounded-full border border-accent-1/10 bg-accent-1/5 blur-2xl"
          animate={{ x: [0, -18, 10, 0], y: [0, 10, -14, 0], opacity: [0.1, 0.22, 0.12, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        {heroParticles.map((particle, index) => (
          <Motion.div
            key={`${particle.left}-${particle.top}-${index}`}
            aria-hidden="true"
            className={`absolute rounded-full ${particle.color} shadow-[0_0_18px_rgba(255,255,255,0.18)]`}
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -20, 8, 0],
              x: [0, 10, -6, 0],
              opacity: [0.25, 0.9, 0.45, 0.25],
              scale: [1, 1.25, 0.95, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: particle.delay,
            }}
          />
        ))}
        <div className="absolute -inset-8 opacity-60 hero-grid-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 xl:gap-10 lg:grid-cols-[minmax(0,0.98fr)_420px]">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[33rem]"
          >
            <h1 className="mb-3 max-w-[34ch] text-[clamp(1.45rem,2.6vw,2rem)] font-bold leading-[1.5] text-text-primary">
              I&apos;m <span className="text-accent-1">Vinuth Kalmidi</span>, a full stack engineer focused on backend systems, APIs, and data-driven applications.
            </h1>
            <p className="mb-3 max-w-lg text-sm leading-7 text-text-secondary sm:text-base">
              I build software for products that need to scale, with a focus on clear systems, reliable APIs, and great user experience.
            </p>
            <div className="mb-6 min-h-[1.8rem] text-base font-medium leading-snug text-accent-1/80">
              <TypeAnimation
                sequence={[
                  'Backend systems that stay reliable.',
                  2000,
                  'Interfaces that feel clear and fast.',
                  2000,
                  'Projects with real-world impact.',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block"
              />
            </div>

            <div className="mb-5 grid max-w-[28rem] gap-3 sm:grid-cols-2">
              <div className="ui-pill-accent inline-flex w-full items-center justify-center gap-2 px-3 py-2.5 text-center backdrop-blur sm:col-span-2">
                <span className="h-2 w-2 rounded-full bg-accent-1 shadow-glow-accent" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] sm:text-[11px]">
                  {personalInfo.availability}
                </span>
              </div>

              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                offset={-70}
                className="ui-button-primary flex min-w-0 items-center justify-center"
              >
                View Experience
              </ScrollLink>
              <a
                href={personalInfo.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ui-button-secondary flex min-w-0 items-center justify-center"
              >
                <FaDownload className="mr-2" /> Resume
              </a>
            </div>
          </Motion.div>

          <Motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="relative"
          >
            <div className="ui-panel p-4 lg:p-5">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent-1">Profile Snapshot</p>

              <div className="divide-y divide-white/10">
                <div className="pb-4">
                  <p className="ui-meta-label">Experience</p>
                  <p className="mt-1.5 text-base text-text-primary">3+ years building production grade software.</p>
                </div>
                <div className="py-4">
                  <p className="ui-meta-label">Strengths</p>
                  <p className="mt-1.5 text-base text-text-primary">Backend APIs, full stack apps, and workflow automation.</p>
                </div>
                {/* <div className="py-4">
                  <p className="ui-meta-label">Domain Exposure</p>
                  <p className="mt-1.5 text-base text-text-primary">AI, IoT, analytics, and product engineering.</p>
                </div> */}
                <div className="py-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <p className="ui-meta-label">Building Now</p>
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-1 animate-pulse" />
                  </div>
                  <p className="text-sm font-medium text-text-primary">RentAgent: AI Rental Search Assistant</p>
                  <p className="text-sm text-text-primary leading-6 mt-0.5">Durable multi-step rental search agent with web search, vetting, and ranking workflows.</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {['Temporal', 'Claude AI', 'Tavily', 'Node.js', 'React'].map(t => (
                      <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] text-text-secondary border border-white/[0.08]">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <p className="ui-meta-label">Work Authorization</p>
                  <p className="mt-1.5 text-base text-text-primary">Authorized to work in the U.S under F-1 OPT.</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="ui-pill-accent px-3 py-1 text-xs">U.S. based</span>
                    <span className="ui-pill-accent px-3 py-1 text-xs">STEM OPT eligible</span>
                    <span className="ui-pill-accent px-3 py-1 text-xs">Open to relocation</span>
                  </div>
                </div>
              </div>
            </div>
          </Motion.aside>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 0%, #202040 100%)' }} />

      <ScrollLink
        to="about"
        smooth={true}
        duration={800}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 cursor-pointer animate-bounce md:block z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </ScrollLink>
    </section>
  );
};

export default Hero;
