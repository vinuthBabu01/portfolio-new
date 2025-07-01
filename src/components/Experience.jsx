import React from 'react';
import SectionTitle from './SectionTitle';
import { experience } from '../data/portfolioData.jsx';
import { FaAward, FaUsers, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const experienceItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const techNameMap = {
  Node: 'nodejs',
  NodeJS: 'nodejs',
  'Node.js': 'nodejs',
  Express: 'express',
  'Express.js':'express',
  'C++': 'cplusplus',
  'C#': 'csharp',
  JS: 'javascript',
  TS: 'typescript',
  React: 'react',
  'React.js': 'react',
  MongoDB: 'mongodb',
  PostgreSQL: 'postgresql',
  Docker: 'docker',
  Python: 'python',
  AWS: 'amazonwebservices',
  SQL: 'mysql',
  'REST APIs':'',
  'Kafka':'apachekafka'
};

const getTechIcon = (techName) => {
  const mapped = techNameMap[techName] || techName;
  const formatted = mapped.toLowerCase().replace(/\s+/g, '');
  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${formatted}/${formatted}-original.svg`;
};

const iconExists = (url) => {
  const img = new Image();
  img.src = url;
  return new Promise((resolve) => {
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
};

const getIcon = (title) => {
  const lowerTitle = title.toLowerCase();
  const iconSize = 'w-4 h-4 sm:w-5 sm:h-5';
  if (lowerTitle.includes('intern')) return <FaAward className={`text-accent-1 ${iconSize}`} />;
  if (lowerTitle.includes('lead') || lowerTitle.includes('manager')) return <FaUsers className={`text-accent-1 ${iconSize}`} />;
  return <FaBriefcase className={`text-accent-1 ${iconSize}`} />;
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="experience-title">Experience</SectionTitle>

        <div className="relative max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="absolute left-[calc(1rem-0.5px)] sm:left-[calc(1.25rem-0.5px)] top-0 h-full w-0.5 bg-gradient-to-b from-accent-1/70 to-accent-1/10 rounded-full"></div>

          {experience.map((item, index) => (
            <motion.div
              key={index}
              className="mb-10 flex"
              custom={index}
              variants={experienceItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-secondary-bg rounded-full border-2 border-accent-1 flex items-center justify-center mr-4 sm:mr-6 relative z-10">
                {getIcon(item.role)}
              </div>

              <div className="flex-grow p-5 sm:p-6 bg-primary-bg rounded-lg border border-primary-bg/20 shadow-xl hover:shadow-accent-1/20 transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h3 className="text-md sm:text-lg lg:text-xl font-semibold text-accent-1 font-mono">{item.role}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary/80 font-mono mt-1 sm:mt-0">{item.duration}</p>
                </div>
                <p className="text-sm sm:text-md text-accent-2/90 font-semibold mb-1">{item.organization}</p>

                {item.description && (
                  <p className="text-xs sm:text-sm leading-relaxed sm:leading-normal mb-3 text-text-secondary/90">
                    {item.description}
                  </p>
                )}

                {item.points.length > 0 && (
                  <div className="mt-3">
                    <h4 className="text-xs sm:text-sm font-semibold text-accent-1 mb-1">Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1.5 text-text-primary pl-1">
                      {item.points.map((point, i) => (
                        <li key={i} className="text-xs sm:text-sm">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.techStack && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.techStack.map((tech, i) => {
                      const iconUrl = getTechIcon(tech);
                      return (
                        <span
                          key={i}
                          className="flex items-center gap-1 bg-accent-1/10 text-accent-1 px-2 py-0.5 rounded-full text-xs sm:text-sm font-mono"
                        >
                          <img
                            src={iconUrl}
                            alt={tech}
                            className="w-4 h-4"
                            onError={(e) => (e.target.style.display = 'none')}
                          />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
