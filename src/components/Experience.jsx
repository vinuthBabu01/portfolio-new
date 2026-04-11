import SectionTitle from './SectionTitle';
import { experience } from '../data/portfolioData.jsx';
import { motion as Motion } from 'framer-motion';
import { getTechIconUrl } from '../utils/techIcon';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
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

const accentMap = [
  'from-accent-1/20 via-transparent to-accent-2/10',
  'from-accent-2/20 via-transparent to-accent-1/10',
  'from-accent-1/15 via-transparent to-accent-2/15',
  'from-accent-2/15 via-transparent to-accent-1/15',
];

const ExperienceCard = ({ item, index }) => (
  <Motion.div
    className="ui-card-elevated ui-card-hover-lift group flex flex-col overflow-hidden"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    custom={index}
    viewport={{ once: true, amount: 0.1 }}
  >
    {/* Visual header */}
    <div className="relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${accentMap[index % accentMap.length]}`} />
      <div className="absolute inset-0 card-grid-overlay" />
      <div className="relative flex flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-base font-semibold text-white">{item.organization}</p>
            <h3 className="text-xl font-semibold leading-tight text-white sm:text-2xl">{item.role}</h3>
          </div>
          <span className="flex-shrink-0 rounded-full border border-white/40 bg-white/15 px-3 py-1 font-mono text-xs text-white">
            {item.duration}
          </span>
        </div>
        {item.description && (
          <p className="mt-1 text-[0.95rem] leading-7 text-white/90">{item.description}</p>
        )}
      </div>
    </div>

    {/* Details */}
    <div className="flex flex-col p-6">
      {item.points?.length > 0 && (
        <div className="mb-5">
          <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent-1">Key Contributions</h4>
          <ul className="space-y-2">
            {item.points.slice(0, 4).map((point, i) => (
              <li key={i} className="flex gap-3 text-sm leading-6 text-text-secondary">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-1" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.techStack?.length > 0 && (
        <div className="mt-auto pt-4 border-t border-white/10">
          <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {item.techStack.slice(0, 6).map((tech, i) => {
              const iconUrl = getTechIconUrl(tech);
              return (
                <span key={i} className="ui-tech-badge-muted">
                  <img
                    src={iconUrl}
                    alt={tech}
                    className="h-3.5 w-3.5"
                    onError={(e) => (e.target.style.display = 'none')}
                  />
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  </Motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="experience-title" eyebrow="Career">Experience</SectionTitle>

        <div className="mb-8 max-w-2xl mx-auto text-center">
          <p className="ui-section-copy">
            Roles where I&apos;ve built backend systems, workflow automation, and production software across different product environments.
          </p>
        </div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {experience.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
      <div className="ui-bottom-fade-primary" />
    </section>
  );
};

export default Experience;
