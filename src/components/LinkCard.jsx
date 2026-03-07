import { motion } from 'motion/react';
import { trackEvent } from '../utils/analytics';

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

export function LinkCard({ title, description, accent, href, icon, iconAlt, gradient, sectionIndex = 0, cardIndex = 0 }) {
  return (
    <motion.a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={`${title} - ${description}`}
      variants={cardVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      data-section-index={sectionIndex}
      data-card-index={cardIndex}
      onClick={() => trackEvent('link_click', { title, sectionIndex, cardIndex, href })}
    >
      <motion.article className="link-card" style={{ '--card-gradient': gradient }} whileHover="hover" initial="rest" animate="rest">
        <div className="link-card-icon-wrap">
          <motion.img
            src={icon}
            alt={iconAlt}
            width="28"
            height="28"
            loading="lazy"
            decoding="async"
            variants={{
              rest: { rotate: 0, scale: 1 },
              hover: { rotate: [0, -10, 10, 0], scale: [1, 1.18, 1] }
            }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
          />
        </div>

        <div className="link-card-content">
          <motion.h3
            variants={{
              rest: { letterSpacing: '0em' },
              hover: { letterSpacing: '0.03em' }
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {title}
          </motion.h3>
          <p>{description}</p>
        </div>

        <span className="link-card-accent">{accent}</span>
      </motion.article>
    </motion.a>
  );
}
