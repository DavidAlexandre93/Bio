import { Analytics } from '@vercel/analytics/react';
import { MotionConfig, motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';
import { Hero } from './components/Hero';
import { DiscoveryPanel } from './components/DiscoveryPanel';
import { LinksSection } from './components/LinksSection';
import { NewsletterBanner } from './components/NewsletterBanner';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ShareSection } from './components/ShareSection';
import { SiteFooter } from './components/SiteFooter';
import { SiteNav } from './components/SiteNav';
import { SupportSection } from './components/SupportSection';
import { getLocalizedData } from './data/links';
import { getTranslations } from './i18n/translations';
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
  const language = useGeolocatedLanguage();
  const translations = useMemo(() => getTranslations(language), [language]);
  const { profile, featuredProject, highlightedProjects, socialLinks } = useMemo(
    () => getLocalizedData(translations),
    [translations]
  );
  const [referralCode, setReferralCode] = useState('');

  useSeoMeta({ language, profile });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const refFromQuery = url.searchParams.get('ref');

      if (refFromQuery && refFromQuery.length <= 128) {
        localStorage.setItem('bio_referral_code', refFromQuery);
        setReferralCode(refFromQuery);
        return;
      }

      const storedRef = localStorage.getItem('bio_referral_code');
      setReferralCode(storedRef?.length <= 128 ? storedRef : '');
    } catch {
      setReferralCode('');
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#conteudo">
        {translations.skipToContent}
      </a>
      <div className="scene-glow" aria-hidden="true" />
      <div className="scene-grid" aria-hidden="true" />
      <SiteNav labels={translations} />
      {referralCode ? (
        <p className="ref-banner">
          {translations.referralLabel}: {referralCode}
        </p>
      ) : null}
      <NewsletterBanner labels={translations} />
      <Hero profile={profile} labels={translations} />

      <motion.main
        className="main-content"
        id="conteudo"
        tabIndex={-1}
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <ProjectShowcase labels={translations} />
        <DiscoveryPanel
          links={[featuredProject, ...highlightedProjects, ...socialLinks]}
          labels={translations}
          language={language}
        />
        <motion.section
          className="links-section"
          variants={containerVariants}
          aria-label={translations.featuredTitle}
        >
          <LinksSection
            title={translations.featuredTitle}
            description={translations.featuredDescription}
            links={highlightedProjects}
            sectionIndex={0}
          />
          <div id="contato">
            <LinksSection
              title={translations.socialTitle}
              description={translations.socialDescription}
              links={socialLinks}
              sectionIndex={1}
            />
          </div>
          <div className="utility-grid">
            <SupportSection labels={translations} />
            <ShareSection labels={translations} />
          </div>
        </motion.section>
      </motion.main>
      <SiteFooter labels={translations} />
      <Analytics />
    </MotionConfig>
  );
}

export default App;
