import { motion } from 'motion/react';

function buildShareLinks(message) {
  const currentUrl = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(message);

  return {
    x: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${text}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
    whatsapp: `https://wa.me/?text=${text}%20${currentUrl}`
  };
}

export function ShareSection({ labels }) {
  const shareLinks = buildShareLinks(labels.share.message);

  return (
    <motion.section
      className="share-section"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.5 }}
      aria-label={labels.share.title}
    >
      <h2>{labels.share.title}</h2>
      <p>{labels.share.subtitle}</p>
      <div className="share-buttons">
        <a href={shareLinks.x} target="_blank" rel="noopener noreferrer">
          {labels.share.x}
        </a>
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
          {labels.share.linkedin}
        </a>
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
          {labels.share.whatsapp}
        </a>
      </div>
    </motion.section>
  );
}
