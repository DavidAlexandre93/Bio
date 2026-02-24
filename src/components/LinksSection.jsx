import { motion } from 'motion/react';
import { LinkCard } from './LinkCard';

const titleVariants = {
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut'
    }
  }
};

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

export function LinksSection({ title, links, sectionIndex = 0 }) {
  return (
    <>
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="links-grid"
        data-animate="cards"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {links.map((link, index) => (
          <LinkCard key={link.title} sectionIndex={sectionIndex} cardIndex={index} {...link} />
        ))}
      </motion.div>
    </>
  );
}
