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

        <motion.img
          className="hero-scratt"
          src="/assets/image/scratt.svg"
          alt="Scratt curioso observando a foto de perfil"
          width="360"
          height="360"
          loading="lazy"
          decoding="async"
          initial={{ opacity: 0, scale: 0.82, x: 72, y: -54, rotate: -8 }}
          animate={{
            opacity: 0.96,
            scale: 1,
            x: [72, 88, 72],
            y: [-54, -64, -54],
            rotate: [-8, -4, -8]
          }}
          transition={{
            opacity: { duration: 0.7, ease: 'easeOut', delay: 0.45 },
            scale: { duration: 0.7, ease: 'easeOut', delay: 0.45 },
            x: { duration: 3.4, repeat: Infinity, ease: 'easeInOut' },
            y: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
          }}
          whileHover={{ scale: 1.04, rotate: -2, x: 94 }}
        />
      </motion.div>
      <motion.h1 className="hero-title" variants={heroItem}>
        {profile.name}
      </motion.h1>
      <motion.p className="hero-tag" variants={heroItem}>
        {profile.tag}
      </motion.p>
      <motion.p className="hero-role" variants={heroItem}>
        {profile.role}
      </motion.p>
      <motion.div className="hero-cv-buttons" variants={heroItem}>
        <motion.a
          className="hero-cv-button"
          href="https://1drv.ms/b/c/6d3c8bf67ab3908f/IQB4BlME7x0MTKdPgaCIauKZAbDHyPcUo3Sa_N_wi_NHw-A?e=8XDvg1"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="Abrir currículo em português"
          onClick={() => trackCvClick('pt-br')}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 320, damping: 20 }}
        >
          Currículo PT-BR
        </motion.a>
        <motion.a
          className="hero-cv-button hero-cv-button-en"
          href="https://1drv.ms/b/c/6d3c8bf67ab3908f/IQDuTGvXj2XCTL3nOTJtGrHsAccROLJ3L75CSILAurRzMvA?e=OKdejw"
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
          href="https://1drv.ms/b/c/6d3c8bf67ab3908f/IQCFLi5sKsRdRL7CDZ3VOwhhAfUAgHIatijDXaNkj7X19gQ?e=peVD5l"
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
    </motion.header>
  );
}
