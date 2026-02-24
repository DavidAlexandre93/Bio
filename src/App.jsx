import { Analytics } from '@vercel/analytics/react';
import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { LinksSection } from './components/LinksSection';
import { SupportSection } from './components/SupportSection';
import { highlightedProjects, profile, socialLinks } from './data/links';
import { useHomeAnimations } from './hooks/useHomeAnimations';

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

  return (
    <>
      <div className="scene-glow" aria-hidden="true" />
      <div className="scene-grid" aria-hidden="true" />
      <Hero profile={profile} />

      <motion.main initial="hidden" animate="show" variants={containerVariants}>
        <motion.section className="links-section" variants={containerVariants}>
          <LinksSection
            title="Projetos em destaque"
            description="Selecione a experiência que quer explorar primeiro: institucional, portfólio completo ou hub pessoal."
            links={highlightedProjects}
            sectionIndex={0}
          />
          <SupportSection />
          <LinksSection
            title="Contato e Redes Profissionais"
            description="Acesse os canais por intenção: networking, comunidade, código, deploys ou contato direto."
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
