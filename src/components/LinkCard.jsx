import { motion } from 'motion/react';
import { useState } from 'react';
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
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={`${title} - ${description}`}
      variants={cardVariants}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.25 }}
      data-section-index={sectionIndex}
      data-card-index={cardIndex}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => setIsPressed(false)}
      onPointerLeave={() => setIsPressed(false)}
      onClick={() => trackEvent('link_click', { title, sectionIndex, cardIndex, href })}
    >
      <motion.article
        className="link-card"
        style={{ '--card-gradient': gradient }}
        whileHover="hover"
        initial="rest"
        animate={isPressed ? 'pressed' : 'rest'}
      >
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
              hover: { rotate: [0, -10, 10, 0], scale: [1, 1.18, 1] },
              pressed: { rotate: 0, scale: 0.95 }
            }}
            transition={{ duration: 0.55, ease: 'easeInOut' }}
          />
        </div>

        <div className="link-card-content">
          <motion.h3
            variants={{
              rest: { letterSpacing: '0em' },
              hover: { letterSpacing: '0.03em' },
              pressed: { letterSpacing: '0.01em' }
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {title}
          </motion.h3>
          <p>{description}</p>
        </div>

        <motion.span
          className="link-card-accent"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.04 },
            pressed: { scale: 0.98 }
          }}
          transition={{ duration: 0.2 }}
        >
          {accent}
        </motion.span>
      </motion.article>
    </motion.a>
  );
}
