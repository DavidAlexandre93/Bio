import { Analytics } from '@vercel/analytics/react';
import { Hero } from './components/Hero';
import { LinksSection } from './components/LinksSection';
import { SupportSection } from './components/SupportSection';
import { highlightedProjects, profile, socialLinks } from './data/links';
import { useHomeAnimations } from './hooks/useHomeAnimations';

function App() {
  useHomeAnimations();

  return (
    <>
      <div className="scene-glow" aria-hidden="true" />
      <Hero profile={profile} />

      <main>
        <section className="links-section">
          <LinksSection title="Projetos em destaque" links={highlightedProjects} />
          <SupportSection />
          <LinksSection title="Contato e Redes Profissionais" links={socialLinks} />
        </section>
      </main>
      <Analytics />
    </>
  );
}

export default App;
