import { motion } from 'motion/react';
import { trackEvent } from '../utils/analytics';

const NEWSLETTER_URL =
  'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=6914089076597878784';

export function NewsletterBanner({ labels }) {
  return (
    <motion.aside
      className="newsletter-banner"
      aria-labelledby="newsletter-title"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
    >
      <div className="newsletter-copy">
        <span className="newsletter-icon" aria-hidden="true">
          in
        </span>
        <div>
          <span className="newsletter-eyebrow">{labels.newsletterEyebrow}</span>
          <strong id="newsletter-title">{labels.newsletterTitle}</strong>
          <p>{labels.newsletterDescription}</p>
        </div>
      </div>

      <motion.a
        className="libutton"
        href={NEWSLETTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={labels.newsletterAriaLabel}
        onClick={() => trackEvent('newsletter_subscribe_click', { platform: 'linkedin' })}
        whileHover={{ y: -2, scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.18 }}
      >
        <span>{labels.newsletterButton}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      </motion.a>
    </motion.aside>
  );
}
