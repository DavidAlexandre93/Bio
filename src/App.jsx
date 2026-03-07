import { Analytics } from '@vercel/analytics/react';
import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { Hero } from './components/Hero';
import { LinksSection } from './components/LinksSection';
import { ShareSection } from './components/ShareSection';
import { SupportSection } from './components/SupportSection';
import { getLocalizedData } from './data/links';
import { getTranslations } from './i18n/translations';
import { useHomeAnimations } from './hooks/useHomeAnimations';
import { useGeolocatedLanguage } from './hooks/useGeolocatedLanguage';
import { useSeoMeta } from './hooks/useSeoMeta';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.18
    }
  }
};

function App() {
  useHomeAnimations();

  const language = useGeolocatedLanguage();
  const translations = useMemo(() => getTranslations(language), [language]);
  const { profile, highlightedProjects, socialLinks } = useMemo(() => getLocalizedData(translations), [translations]);
  const [referralCode, setReferralCode] = useState('');

  useSeoMeta({ language, profile });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const url = new URL(window.location.href);
    const refFromQuery = url.searchParams.get('ref');

    if (refFromQuery) {
      localStorage.setItem('bio_referral_code', refFromQuery);
      setReferralCode(refFromQuery);
      return;
    }

    const storedRef = localStorage.getItem('bio_referral_code');
    setReferralCode(storedRef || '');
  }, []);

  return (
    <>
      <div className="scene-glow" aria-hidden="true" />
      <div className="scene-grid" aria-hidden="true" />
      {referralCode ? <p className="ref-banner">Referral ativo: {referralCode}</p> : null}
      <Hero profile={profile} />

      <motion.main initial="hidden" animate="show" variants={containerVariants}>
        <motion.section className="links-section" variants={containerVariants} aria-label={translations.featuredTitle}>
          <LinksSection
            title={translations.featuredTitle}
            description={translations.featuredDescription}
            links={highlightedProjects}
            sectionIndex={0}
          />
          <SupportSection title={translations.supportTitle} />
          <ShareSection language={language} />
          <LinksSection
            title={translations.socialTitle}
            description={translations.socialDescription}
            links={socialLinks}
            sectionIndex={1}
          />
        </motion.section>
      </motion.main>
      <Analytics />
    </>
  );
}

export default App;
