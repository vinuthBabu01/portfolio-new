import React from 'react';
import SectionTitle from './SectionTitle';
import { skills } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';

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

  return (
    <motion.div
      variants={skillItemVariants}
      className="flex flex-col items-center p-4 bg-secondary-bg rounded-lg shadow-md hover:shadow-accent-1/10 transition-shadow duration-300"
      whileHover={{ y: -5 }}
    >
      {isImage ? (
        <img
          src={icon.startsWith('http') ? icon : `/${icon}`}
          alt={name}
          className="w-12 h-12 mb-2 object-contain"
          loading="lazy"
          onError={(e) => (e.target.style.display = 'none')}
        />
      ) : (
        <div className="text-accent-1 text-3xl mb-2">{name.charAt(0)}</div>
      )}
      <span className="text-text-primary text-sm font-mono text-center">{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const categories = [
    { title: 'Frontend', data: skills.frontend },
    { title: 'Backend', data: skills.backend },
    { title: 'Databases', data: skills.databases },
    { title: 'Cloud & DevOps', data: skills.cloudAndDevOps },
    { title: 'Data & NLP', data: skills.dataAndNLP },
    { title: 'Tools & Platforms', data: skills.toolsAndPlatforms },
  ];

  return (
    <section id="skills" className="py-20 bg-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="skills-title">My Tech Arsenal</SectionTitle>

        <div className="space-y-14">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={skillCategoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-accent-2 mb-6 font-mono text-center sm:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.data.map((skill, index) => (
                  <SkillCard key={index} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </motion.div>
          ))}

          {/* Core Competencies */}
          <motion.div
            variants={skillCategoryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-accent-2 mb-6 font-mono text-center sm:text-left">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3">
              {skills.coreCompetencies.map((competency, index) => (
                <motion.span
                  key={index}
                  variants={skillItemVariants}
                  className="bg-secondary-bg text-text-secondary py-2 px-4 rounded-full text-sm font-mono shadow-sm"
                >
                  {competency}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
