import React from 'react';
import SectionTitle from './SectionTitle';
import { skills } from '../data/portfolioData.jsx';
import { motion as Motion } from 'framer-motion';

const skillCategoryVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.1, duration: 0.5 },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillCard = ({ name, icon }) => {
  const isImage = typeof icon === 'string' && icon.length > 0;
  const iconSrc = isImage ? (icon.startsWith('http') || icon.startsWith('/') ? icon : `/${icon}`) : null;

  return (
    <Motion.div
      variants={skillItemVariants}
      className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-secondary-bg/55 px-3 py-2.5 transition-all duration-300 hover:border-accent-1/20 hover:bg-secondary-bg/75"
      whileHover={{ y: -2 }}
    >
      {isImage ? (
        <img
          src={iconSrc}
          alt={name}
          className="h-6 w-6 object-contain"
          loading="lazy"
          onError={(e) => (e.target.style.display = 'none')}
        />
      ) : (
        <div className="text-sm text-accent-1">{name.charAt(0)}</div>
      )}
      <span className="text-sm text-text-primary">{name}</span>
    </Motion.div>
  );
};

const Skills = () => {
  const categories = [
    { title: 'Frontend', data: skills.frontend },
    { title: 'Backend', data: skills.backend },
    { title: 'Databases', data: skills.databases },
    { title: 'DevOps & Platforms', data: skills.cloudAndDevOps },
    { title: 'Data & AI', data: skills.dataAndNLP },
    { title: 'Tools & Workflow', data: skills.toolsAndPlatforms },
  ];

  return (
    <section id="skills" className="relative py-20 bg-primary-bg">
      <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #1a1a2e 0%, transparent 100%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 0%, #202040 100%)' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="skills-title" eyebrow="Capabilities">My Tech Arsenal</SectionTitle>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="ui-section-copy">
            These are the tools I use most across backend engineering, full stack product work, automation, and AI-driven application development.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category, idx) => (
            <Motion.div
              key={idx}
              variants={skillCategoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="ui-panel-soft p-4"
            >
              <h3 className="mb-4 text-xl font-semibold text-text-primary sm:text-2xl">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.data.map((skill, index) => (
                  <SkillCard key={index} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </Motion.div>
          ))}

          {/* Core Competencies */}
          <Motion.div
            variants={skillCategoryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="ui-panel-soft md:col-span-2 p-4"
          >
            <h3 className="mb-5 text-xl font-semibold text-text-primary sm:text-2xl">
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.coreCompetencies.map((competency, index) => (
                <Motion.span
                  key={index}
                  variants={skillItemVariants}
                  className="ui-pill-muted px-4 py-2 text-sm"
                >
                  {competency}
                </Motion.span>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
      <div className="ui-bottom-fade-secondary" />
    </section>
  );
};

export default Skills;
