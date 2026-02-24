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

export function LinksSection({ title, description, links, sectionIndex = 0 }) {
  return (
    <section className="links-group" data-section-index={sectionIndex}>
      <motion.h2
        className="section-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {description}
        </motion.p>
      ) : null}
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
    </section>
  );
}
