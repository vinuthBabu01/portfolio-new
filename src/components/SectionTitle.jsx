import React from 'react';
import { motion as Motion } from 'framer-motion';

const SectionTitle = ({ children, id, eyebrow = 'Section' }) => {
  return (
    <Motion.div
      id={id}
      className="mb-12 sm:mb-16 text-center"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.35em] text-accent-1/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
        {children}
      </h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-accent-1 to-transparent" />
    </Motion.div>
  );
};

export default SectionTitle;
