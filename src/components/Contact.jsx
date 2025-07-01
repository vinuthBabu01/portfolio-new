import React from 'react';
import SectionTitle from './SectionTitle';
import { socialLinks, personalInfo } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';

const contactItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="contact-title">Get In Touch</SectionTitle>

        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            I’m always open to connecting — whether it's about job opportunities, collaborations, feedback on my work, or just a tech chat. Feel free to drop me a message via the platforms below!
          </p>

          <div className="flex justify-center gap-6 flex-wrap md:flex-nowrap">
            <a
              href={`mailto:${personalInfo.email}`}
              className="whitespace-nowrap px-6 py-3 font-mono text-lg border-2 border-accent-1 text-accent-1 rounded-md hover:bg-accent-1 hover:text-primary-bg transition-all duration-300 flex items-center shadow-lg hover:shadow-accent-1/30"
              aria-label="Email"
            >
              Email Me
            </a>

            <a
              href={`${personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-3 font-mono text-lg border-2 border-accent-1 text-accent-1 rounded-md hover:bg-accent-1 hover:text-primary-bg transition-all duration-300 flex items-center shadow-lg hover:shadow-accent-1/30"
              aria-label="LinkedIn"
            >
              Message on LinkedIn
            </a>

            <a
              href={`${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-6 py-3 font-mono text-lg border-2 border-accent-1 text-accent-1 rounded-md hover:bg-accent-1 hover:text-primary-bg transition-all duration-300 flex items-center shadow-lg hover:shadow-accent-1/30"
              aria-label="GitHub"
            >
              Visit GitHub
            </a>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            {Object.entries(socialLinks).map(([key, link], index) => (
              <motion.a
                key={key}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-1 transition-colors"
                aria-label={key}
                variants={contactItemVariants}
                initial="hidden"
                whileInView="visible"
                custom={index + 2}
                viewport={{ once: true }}
              >
                {React.cloneElement(link.icon, { size: 32 })}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
