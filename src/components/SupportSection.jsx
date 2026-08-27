import { motion } from 'motion/react';

export function SupportSection({ title }) {
  return (
    <motion.div
      className="support"
      data-animate="support"
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <div>
        <span className="support-kicker">OPEN SOURCE</span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          {title}
        </motion.h2>
      </div>
      <motion.a
        className="support-link"
        href="https://www.buymeacoffee.com/davidfernandes"
        rel="noreferrer"
        target="_blank"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 330, damping: 18 }}
      >
        <span aria-hidden="true">☕</span>
        Buy me a coffee
        <span aria-hidden="true">↗</span>
      </motion.a>
    </motion.div>
  );
}
