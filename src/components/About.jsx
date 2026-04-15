import React from 'react';
import SectionTitle from './SectionTitle';
import { education } from '../data/portfolioData.jsx';
import { motion as Motion } from 'framer-motion';
import { FaUniversity } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-secondary-bg">
      <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #202040 0%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 0%, #1a1a2e 100%)' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="about-title" eyebrow="Profile">About Me</SectionTitle>

        <Motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="ui-panel p-8">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-1/80">Who I Am</p>
            <p className="text-lg leading-8 text-white/90">
              Hi! I&apos;m Vinuth Babu Kalmidi, a full stack software engineer with 3+ years of professional experience and a Master&apos;s in Computer Engineering from Syracuse University. I build backend systems, APIs, and data-driven web applications with a strong focus on clarity, reliability, and real product needs.
            </p>
            <p className="mt-5 text-base leading-8 text-white/90">
              My work spans automation workflows, AI-enabled systems,data pipelines and machine learning projects, and I enjoy working with teams to turn complex requirements into software that is practical, maintainable, and useful.
            </p>
          </div>

        </Motion.div>

        <div className="mt-14">
          <h3 className="mb-8 text-center text-2xl font-semibold text-text-primary">Education</h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <Motion.div
              key={index}
              className="rounded-[28px] border border-white/10 bg-primary-bg p-6 shadow-xl shadow-black/20 hover:shadow-accent-1/20 transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mb-3 flex items-center">
                <FaUniversity className="mr-3 text-2xl text-accent-1" />
                <h4 className="text-lg font-semibold text-text-primary sm:text-xl">{edu.institution}</h4>
              </div>
              <p className="font-medium text-text-secondary">{edu.degree}</p>
              <p className="mt-2 text-sm font-mono text-text-secondary">{edu.duration}</p>
              <p className="mt-1 text-sm font-mono text-accent-1">{edu.score}</p>
            </Motion.div>
          ))}
        </div>
      </div>
      <div className="ui-bottom-fade-primary" />
    </section>
  );
};

export default About;
