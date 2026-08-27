import { motion } from 'motion/react';
import { trackEvent } from '../utils/analytics';

const heroContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 }
  }
};

const heroItem = {
  hidden: { opacity: 0, y: 22, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] }
  }
};

const resumeLinks = [
  {
    label: 'Currículo PT-BR',
    shortLabel: 'PT-BR',
    href: '/assets/curriculos/curriculo-david-alexandre-fernandes-pt-br.pdf',
    language: 'pt-br'
  },
  {
    label: 'Currículo EUR',
    shortLabel: 'EUR',
    href: '/assets/curriculos/resume-david-alexandre-fernandes-eur.pdf',
    language: 'eur'
  },
  {
    label: 'Currículo EN',
    shortLabel: 'EN',
    href: '/assets/curriculos/resume-david-alexandre-fernandes-en.pdf',
    language: 'en'
  }
];

export function Hero({ profile, labels }) {
  const trackCvClick = (language) => {
    trackEvent('cv_click', { language });
  };

  return (
    <motion.header
      className="hero"
      id="top"
      variants={heroContainer}
      initial="hidden"
      animate="show"
    >
      <div className="hero-copy">
        <motion.div className="availability-pill" variants={heroItem}>
          <span aria-hidden="true" />
          {labels.available}
        </motion.div>

        <motion.p className="hero-eyebrow" variants={heroItem}>
          {labels.heroEyebrow}
        </motion.p>
        <motion.h1 variants={heroItem}>
          David Alexandre
          <span>Fernandes.</span>
        </motion.h1>
        <motion.p className="hero-role" variants={heroItem}>
          {profile.role}
        </motion.p>
        <motion.p className="hero-intro" variants={heroItem}>
          {labels.heroIntroduction}
        </motion.p>

        <motion.div className="hero-cv-area" variants={heroItem}>
          <p className="hero-cv-label">{labels.resumeHeading}</p>
          <div className="hero-cv-buttons">
            {resumeLinks.map((resume) => (
              <motion.a
                className="hero-cv-button"
                href={resume.href}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={`${labels.openResumeLabel} ${resume.shortLabel}`}
                onClick={() => trackCvClick(resume.language)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                key={resume.language}
              >
                <svg className="resume-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 3h7l4 4v14H7zM14 3v5h5M10 13h5M10 17h5" />
                </svg>
                <span>{resume.label}</span>
                <svg className="resume-arrow" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div className="hero-visual" variants={heroItem}>
        <div className="portrait-frame">
          <img
            className="profile"
            src={profile.image}
            alt={profile.imageAlt}
            width="640"
            height="800"
            loading="eager"
            decoding="async"
          />
          <div className="portrait-overlay" />
        </div>
        <div className="portrait-note portrait-note-top">
          <span>DESIGN</span>
          <span>CODE</span>
          <span>IMPACT</span>
        </div>
        <div className="portrait-note portrait-note-bottom">
          <small>{labels.basedIn}</small>
          <strong>Brasil · 2026</strong>
        </div>
      </motion.div>
    </motion.header>
  );
}
