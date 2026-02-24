import { motion } from 'motion/react';

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: 'easeOut'
    }
  }
};

export function LinkCard({ title, href, icon, iconAlt, gradient, sectionIndex = 0, cardIndex = 0 }) {
  return (
    <motion.a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      variants={cardVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      data-section-index={sectionIndex}
      data-card-index={cardIndex}
    >
      <motion.article className="link-card" style={{ '--card-gradient': gradient }} whileHover="hover" initial="rest" animate="rest">
        <motion.img
          src={icon}
          alt={iconAlt}
          width="28"
          height="28"
          variants={{
            rest: { rotate: 0, scale: 1 },
            hover: { rotate: [0, -10, 10, 0], scale: [1, 1.18, 1] }
          }}
          transition={{ duration: 0.55, ease: 'easeInOut' }}
        />
        <motion.h3
          variants={{
            rest: { letterSpacing: '0em' },
            hover: { letterSpacing: '0.03em' }
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {title}
        </motion.h3>
      </motion.article>
    </motion.a>
  );
}
