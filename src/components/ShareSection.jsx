import { motion } from 'motion/react';
import { useState } from 'react';

const SHARE_LABELS = {
  'pt-BR': {
    title: 'Compartilhe este hub',
    subtitle: 'Ajude este conteúdo a alcançar mais pessoas.',
    x: 'Compartilhar no X',
    linkedin: 'Compartilhar no LinkedIn',
    whatsapp: 'Compartilhar no WhatsApp',
    copy: 'Copiar link',
    copied: 'Link copiado'
  },
  'en-US': {
    title: 'Share this hub',
    subtitle: 'Help this content reach more people.',
    x: 'Share on X',
    linkedin: 'Share on LinkedIn',
    whatsapp: 'Share on WhatsApp',
    copy: 'Copy link',
    copied: 'Link copied'
  },
  'fr-FR': {
    title: 'Partagez ce hub',
    subtitle: 'Aidez ce contenu à toucher plus de personnes.',
    x: 'Partager sur X',
    linkedin: 'Partager sur LinkedIn',
    whatsapp: 'Partager sur WhatsApp',
    copy: 'Copier le lien',
    copied: 'Lien copié'
  },
  'ja-JP': {
    title: 'このハブを共有',
    subtitle: 'より多くの人にこのコンテンツを届けましょう。',
    x: 'Xで共有',
    linkedin: 'LinkedInで共有',
    whatsapp: 'WhatsAppで共有',
    copy: 'リンクをコピー',
    copied: 'リンクをコピーしました'
  }
};

function buildShareLinks() {
  const currentUrl = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('Confira o hub do David Alexandre Fernandes com projetos e links profissionais.');

  return {
    x: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${text}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
    whatsapp: `https://wa.me/?text=${text}%20${currentUrl}`
  };
}

export function ShareSection({ language }) {
  const labels = SHARE_LABELS[language] || SHARE_LABELS['en-US'];
  const shareLinks = buildShareLinks();
  const [copyState, setCopyState] = useState('idle');

  const handleCopy = async () => {
    try {
      setCopyState('loading');
      await navigator.clipboard.writeText(window.location.href);
      setCopyState('copied');
      window.setTimeout(() => setCopyState('idle'), 1800);
    } catch {
      setCopyState('idle');
    }
  };

  return (
    <motion.section
      className="share-section"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.5 }}
      aria-label={labels.title}
    >
      <h2>{labels.title}</h2>
      <p>{labels.subtitle}</p>
      <div className="share-buttons">
        <a href={shareLinks.x} target="_blank" rel="noopener noreferrer">
          {labels.x}
        </a>
        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer">
          {labels.linkedin}
        </a>
        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer">
          {labels.whatsapp}
        </a>
        <motion.button
          type="button"
          className={`share-copy ${copyState !== 'idle' ? 'is-active' : ''}`}
          onClick={handleCopy}
          whileTap={{ scale: 0.98 }}
          aria-live="polite"
        >
          {copyState === 'loading' ? <span className="copy-loader" aria-hidden="true" /> : null}
          {copyState === 'copied' ? labels.copied : labels.copy}
        </motion.button>
      </div>
    </motion.section>
  );
}
