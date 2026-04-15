import React from 'react';
import SectionTitle from './SectionTitle';
import { projects } from '../data/portfolioData.jsx';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion as Motion } from 'framer-motion';
import { getTechIconUrls } from '../utils/techIcon';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const TechBadge = ({ tech }) => {
  const { cdnUrl, localUrl } = getTechIconUrls(tech);
  const [imgError, setImgError] = React.useState(false);

  return (
    <span className="ui-tech-badge-muted">
      {!imgError && cdnUrl ? (
        <img
          src={cdnUrl}
          alt={tech}
          className="h-4 w-4"
          onError={(e) => {
            const currentSrc = e.target.src;
            const localAbsolute = window.location.origin + localUrl;

            if (currentSrc !== localAbsolute && localUrl) {
              e.target.src = localUrl;
            } else {
              setImgError(true);
            }
          }}
        />
      ) : null}
      {tech}
    </span>
  );
};

const ProjectCard = ({ project, index, featured = false }) => {
  return (
    <Motion.div
      className={`ui-card-elevated ui-card-hover-lift group flex flex-col overflow-hidden ${featured ? 'lg:col-span-3 lg:grid lg:grid-cols-[1.1fr_1.4fr]' : ''}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={`relative min-h-[220px] overflow-hidden ${featured ? 'lg:min-h-full' : ''}`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent || 'from-accent-1/20 via-transparent to-accent-2/10'}`} />
        <div className="absolute inset-0 card-grid-overlay" />
        <div className="relative flex h-full flex-col justify-between p-6">
          <div className="flex items-start justify-between gap-3">
            <span className="ui-category-pill">
              {project.category}
            </span>
            {project.icon && <div className="text-accent-1">{project.icon}</div>}
          </div>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-1">{project.date}</p>
            <h3 className="max-w-md text-2xl font-semibold leading-tight text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-7 text-white/75">
              {project.highlight}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-6">
        <p className="mb-5 flex-grow text-sm leading-7 text-text-secondary">
          {project.description}
        </p>

        {project.outcomes?.length > 0 && (
          <div className="mb-5">
            <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-1">
              Highlights
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.outcomes.map((outcome) => (
                <span key={outcome} className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-text-primary">
                  {outcome}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mb-6">
          <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <TechBadge key={`${project.title}-${tech}`} tech={tech} />
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-5">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-text-secondary transition-colors hover:text-accent-1"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <FaGithub size={20} className="mr-1" />
              <span className="text-sm font-medium">Source</span>
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-text-secondary transition-colors hover:text-accent-1"
              aria-label={`Live demo of ${project.title}`}
            >
              <FaExternalLinkAlt size={18} className="mr-1" />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </Motion.div>
  );
};

const Projects = () => {
  const featuredProjects = projects.slice(0, 2);
  const remainingProjects = projects.slice(2);

  return (
    <section id="projects" className="relative py-20 bg-primary-bg">
      <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #1a1a2e 0%, transparent 100%)' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="projects-title" eyebrow="Featured Work">Projects</SectionTitle>
        <div className="mb-8 max-w-2xl mx-auto text-center">
          <p className="ui-section-copy">
            A few projects that reflect how I approach backend design, product thinking, and practical problem-solving across web, data, and AI-related work.
          </p>
        </div>

        <div className="grid gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} featured />
          ))}
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {remainingProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + featuredProjects.length} />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 0%, #202040 100%)' }} />
    </section>
  );
};

export default Projects;
