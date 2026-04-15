import SectionTitle from './SectionTitle';
import { personalInfo } from '../data/portfolioData.jsx';
import { motion as Motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const contactItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    }, }),
};

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-secondary-bg">
      <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none" style={{ background: 'linear-gradient(to bottom, #202040 0%, transparent 100%)' }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="contact-title" eyebrow="Contact">Get In Touch</SectionTitle>

        <Motion.div
          className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col justify-center">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-accent-1/80">
              Let&apos;s Build
            </p>
            <h3 className="text-3xl font-semibold leading-tight text-text-primary">
              Open to <span className="text-accent-1">software engineering roles</span>, collaborations, and thoughtful product conversations.
            </h3>
            <p className="mt-5 text-base leading-8 text-text-secondary">
              If you&apos;re <span className="font-semibold text-text-primary">hiring</span>, building something interesting, or want to talk through an idea, I&apos;d be happy to connect. The fastest way to reach me is <span className="font-semibold text-text-primary">email</span>, and LinkedIn is great for follow-up.
            </p>
          </div>

          <div className="grid gap-4 h-full grid-rows-3">
            <Motion.a
              href={`mailto:${personalInfo.email}`}
              className="ui-contact-card"
              variants={contactItemVariants}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-accent-1/10 p-3 text-accent-1"><FaEnvelope size={20} /></div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">Email</p>
                  <p className="mt-1 text-base text-text-primary">{personalInfo.email}</p>
                </div>
              </div>
            </Motion.a>

            <Motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-contact-card"
              variants={contactItemVariants}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-accent-1/10 p-3 text-accent-1"><FaLinkedin size={20} /></div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">LinkedIn</p>
                  <p className="mt-1 text-base text-text-primary">vinuth-kalmidi</p>
                </div>
              </div>
            </Motion.a>

            <Motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ui-contact-card"
              variants={contactItemVariants}
              initial="hidden"
              whileInView="visible"
              custom={4}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-accent-1/10 p-3 text-accent-1"><FaGithub size={20} /></div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-text-secondary">GitHub</p>
                  <p className="mt-1 text-base text-text-primary">github.com/vinuthBabu01</p>
                </div>
              </div>
            </Motion.a>

          </div>
        </Motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 0%, #1a1a2e 100%)' }} />
    </section>
  );
};

export default Contact;
