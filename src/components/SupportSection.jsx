import { motion } from 'motion/react';

export function SupportSection() {
  return (
    <motion.div
      className="support"
      data-animate="support"
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        a ⭐️ If Github projects helped you!
      </motion.h2>
      <motion.a
        href="https://www.buymeacoffee.com/davidfernandes"
        rel="noreferrer"
        target="_blank"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 330, damping: 18 }}
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          height="50"
          width="210"
          alt="buymeacoffee.com/davidfernandes"
        />
      </motion.a>
    </motion.div>
  );
}
