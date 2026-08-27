import { motion } from 'motion/react';
import { trackEvent } from '../utils/analytics';

export function ProjectShowcase({ labels }) {
  return (
    <motion.section
      className="project-showcase"
      id="projetos"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      aria-labelledby="projects-title"
    >
      <div className="section-heading">
        <div>
          <span className="section-kicker">{labels.projectsEyebrow}</span>
          <h2 id="projects-title">{labels.projectsTitle}</h2>
        </div>
        <p>{labels.projectsDescription}</p>
      </div>

      <motion.a
        className="featured-project"
        href="https://www.hortelanagtech.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('project_click', { project: 'Hortelan AgTech' })}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        aria-label={`${labels.hortelanTitle} — ${labels.projectCta}`}
      >
        <div className="featured-project-copy">
          <div className="project-meta">
            <span className="project-number">01</span>
            <span>{labels.hortelanTag}</span>
          </div>
          <h3>{labels.hortelanTitle}</h3>
          <p className="project-lead">{labels.hortelanLead}</p>
          <p className="project-description">{labels.hortelanDescription}</p>

          <div className="project-tags" aria-label={labels.technologiesLabel}>
            {labels.hortelanTechnologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <span className="project-cta">
            {labels.projectCta}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </div>

        <div className="project-visual" aria-hidden="true">
          <div className="dashboard-shell">
            <div className="dashboard-bar">
              <span />
              <span />
              <span />
              <small>HORTELAN / LIVE</small>
            </div>
            <div className="dashboard-content">
              <div className="dashboard-topline">
                <div>
                  <small>AMBIENTE</small>
                  <strong>Horta conectada</strong>
                </div>
                <span className="live-indicator">ONLINE</span>
              </div>

              <div className="sensor-grid">
                <div className="sensor-card sensor-card-main">
                  <small>Umidade do solo</small>
                  <strong>72%</strong>
                  <div className="sensor-chart">
                    <i style={{ height: '46%' }} />
                    <i style={{ height: '60%' }} />
                    <i style={{ height: '54%' }} />
                    <i style={{ height: '74%' }} />
                    <i style={{ height: '67%' }} />
                    <i style={{ height: '82%' }} />
                  </div>
                </div>
                <div className="sensor-card sensor-card-stat">
                  <small>Temperatura</small>
                  <strong>24°</strong>
                  <span>ideal</span>
                </div>
                <div className="sensor-card sensor-card-stat">
                  <small>Irrigação</small>
                  <strong>Auto</strong>
                  <span>ativa</span>
                </div>
              </div>
            </div>
          </div>
          <div className="project-orbit project-orbit-one" />
          <div className="project-orbit project-orbit-two" />
        </div>
      </motion.a>
    </motion.section>
  );
}
