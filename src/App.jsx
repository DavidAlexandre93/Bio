import { Analytics } from '@vercel/analytics/react';
import { motion } from 'motion/react';
import { useEffect, useMemo } from 'react';
import { Hero } from './components/Hero';
import { LinksSection } from './components/LinksSection';
import { SupportSection } from './components/SupportSection';
import { getLocalizedData } from './data/links';
import { getTranslations } from './i18n/translations';
import { useHomeAnimations } from './hooks/useHomeAnimations';
import { useGeolocatedLanguage } from './hooks/useGeolocatedLanguage';

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

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <div className="scene-glow" aria-hidden="true" />
      <div className="scene-grid" aria-hidden="true" />
      <Hero profile={profile} />

      <motion.main initial="hidden" animate="show" variants={containerVariants}>
        <motion.section className="links-section" variants={containerVariants}>
          <LinksSection
            title={translations.featuredTitle}
            description={translations.featuredDescription}
            links={highlightedProjects}
            sectionIndex={0}
          />
          <SupportSection title={translations.supportTitle} />
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
