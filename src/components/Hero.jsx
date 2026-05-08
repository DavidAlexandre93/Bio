import { motion } from 'motion/react';
import { trackEvent } from '../utils/analytics';

const heroContainer = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 14,
      staggerChildren: 0.14
    }
  }
};

const heroItem = {
  hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.65,
      ease: 'easeOut'
    }
  }
};

export function Hero({ profile }) {
  const trackCvClick = (language) => {
    trackEvent('cv_click', { language });
  };

  const trackGraduationClick = () => {
    trackEvent('graduation_click', { source: 'hero_beca' });
  };

  return (
    <motion.header className="hero" variants={heroContainer} initial="hidden" animate="show">
      <motion.div className="hero-profile-scene" variants={heroItem}>
        <motion.img
          className="profile"
          src={profile.image}
          alt={profile.imageAlt}
          width="125"
          height="125"
          loading="eager"
          decoding="async"
          whileHover={{ scale: 1.06, rotate: [0, -3, 3, 0] }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        />
      </motion.div>

      <motion.img
        className="hero-scratt"
        src="/assets/image/scratt.svg"
        alt="Scratt gigante atrás do nome Fernandes"
        width="780"
        height="780"
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, scale: 0.86, x: 140, y: -60, rotate: -8 }}
        animate={{
          opacity: 0.92,
          scale: 1,
          x: [140, 154, 140],
          y: [-60, -70, -60],
          rotate: [-8, -5, -8]
        }}
        transition={{
          opacity: { duration: 0.7, ease: 'easeOut', delay: 0.45 },
          scale: { duration: 0.7, ease: 'easeOut', delay: 0.45 },
          x: { duration: 3.6, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 2.9, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 2.9, repeat: Infinity, ease: 'easeInOut' }
        }}
      />

      <motion.h1 className="hero-title" variants={heroItem}>
        {profile.name}
      </motion.h1>
      <motion.p className="hero-tag" variants={heroItem}>
        {profile.tag}
      </motion.p>
      <motion.p className="hero-role" variants={heroItem}>
        {profile.role}
      </motion.p>
      <motion.div className="hero-cv-area" variants={heroItem}>
        <motion.div className="hero-cv-buttons">
          <motion.a
            className="hero-cv-button hero-cv-button-pt"
            href="https://davidalexandre93.github.io/resume/PT-BR/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Abrir currículo em português (PT-BR)"
            onClick={() => trackCvClick('pt-br')}
            whileHover={{ scale: 1.01, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 20 }}
          >
            Currículo PT-BR
          </motion.a>
          <motion.a
            className="hero-cv-button hero-cv-button-en"
            href="https://1drv.ms/w/c/6d3c8bf67ab3908f/IQC9HQfB35njSbf2CYU1E-O2Ac7VskXp0dpDNUgHyUQmkO8?e=HzNh5K"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Open resume in English"
            onClick={() => trackCvClick('en')}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 20 }}
          >
            Currículo EN
          </motion.a>
          <motion.a
            className="hero-cv-button hero-cv-button-fr"
            href="https://davidalexandre93.github.io/resume/FR/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Ouvrir le CV en français"
            onClick={() => trackCvClick('fr')}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 20 }}
          >
            Currículo FR
          </motion.a>
        </motion.div>

        <motion.a
          className="hero-beca-link"
          href="https://davidalexandre93.github.io/formacao/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir página de formação"
          onClick={trackGraduationClick}
          initial={{ opacity: 0, y: 20, scale: 0.75, rotate: -14 }}
          animate={{
            opacity: 1,
            y: [18, -14, 8, -10, 18],
            x: [0, -3, 3, -2, 0],
            scale: [1, 1.08, 1, 1.06, 1],
            rotate: [-10, 7, -6, 5, -10]
          }}
          transition={{
            opacity: { duration: 0.55, delay: 0.4 },
            y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
            x: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' },
            scale: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }
          }}
          whileHover={{ scale: 1.16, rotate: [0, -10, 10, -8, 0], y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="/assets/image/beca.svg"
            alt="Beca flutuando para acessar a página de formação"
            width="94"
            height="94"
            loading="lazy"
            decoding="async"
          />
        </motion.a>
      </motion.div>
    </motion.header>
  );
}
