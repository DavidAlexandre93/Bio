import { motion } from 'motion/react';

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
  return (
    <motion.header className="hero" variants={heroContainer} initial="hidden" animate="show">
      <motion.img
        className="profile"
        src={profile.image}
        alt={profile.imageAlt}
        width="125"
        height="125"
        variants={heroItem}
        whileHover={{ scale: 1.06, rotate: [0, -3, 3, 0] }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
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
      <motion.div className="hero-cv-buttons" variants={heroItem}>
        <motion.a
          className="hero-cv-button"
          href="https://1drv.ms/b/c/6d3c8bf67ab3908f/IQB4BlME7x0MTKdPgaCIauKZAbDHyPcUo3Sa_N_wi_NHw-A?e=8XDvg1"
          rel="noopener noreferrer"
          target="_blank"
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
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 320, damping: 20 }}
        >
          Currículo EN
        </motion.a>
      </motion.div>
    </motion.header>
  );
}
