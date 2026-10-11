import { motion } from 'motion/react';

export function SiteNav({ labels }) {
  return (
    <motion.nav
      className="site-nav"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      aria-label={labels.navLabel}
    >
      <a className="site-brand" href="#top" aria-label={labels.navHomeLabel}>
        <span className="site-brand-mark" aria-hidden="true">
          DAF
        </span>
        <span className="site-brand-name">David Fernandes</span>
      </a>

      <div className="site-nav-links">
        <a href="#projetos">{labels.navProjects}</a>
        <a href="#contato">{labels.navContact}</a>
      </div>
    </motion.nav>
  );
}
