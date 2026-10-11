import { motion } from 'motion/react';
import { useState } from 'react';
import { LinkCard } from './LinkCard';
import { getIntentQuery, usePortfolioDiscovery } from '../hooks/usePortfolioDiscovery';

const intents = ['build', 'code', 'connect', 'data'];

export function DiscoveryPanel({ links, labels, language }) {
  const { query, setQuery, results } = usePortfolioDiscovery(links);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [assistantState, setAssistantState] = useState('idle');

  const selectIntent = (intent) => setQuery(getIntentQuery(intent));

  const askAssistant = async (event) => {
    event.preventDefault();
    if (!question.trim()) return;
    setAssistantState('loading');
    setAnswer(null);
    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: question.trim(), language })
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.error || 'assistant_unavailable');
      setAnswer(payload.answer);
      setAssistantState('success');
    } catch {
      setAssistantState('error');
    }
  };

  return (
    <section className="discovery-panel" aria-labelledby="discovery-title">
      <div className="discovery-intro">
        <span className="section-kicker">{labels.discoveryEyebrow}</span>
        <h2 id="discovery-title">{labels.discoveryTitle}</h2>
        <p>{labels.discoveryDescription}</p>
      </div>

      <div className="discovery-grid">
        <div className="discovery-search">
          <label htmlFor="portfolio-search">{labels.discoverySearchLabel}</label>
          <div className="search-field">
            <span aria-hidden="true">⌕</span>
            <input
              id="portfolio-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={labels.discoveryPlaceholder}
            />
            {query ? (
              <button type="button" onClick={() => setQuery('')} aria-label={labels.clearSearch}>
                ×
              </button>
            ) : null}
          </div>
          <div className="intent-list" aria-label={labels.discoveryIntentsLabel}>
            {intents.map((intent) => (
              <button
                type="button"
                key={intent}
                onClick={() => selectIntent(intent)}
                className="intent-chip"
              >
                {labels.intents[intent]}
              </button>
            ))}
          </div>
          <div className="discovery-results" aria-live="polite">
            {results.length ? (
              results.map((link, index) => (
                <LinkCard key={link.title} {...link} cardIndex={index} />
              ))
            ) : (
              <p className="empty-state">{labels.discoveryEmpty}</p>
            )}
          </div>
        </div>

        <motion.form
          className="assistant-card"
          onSubmit={askAssistant}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="assistant-orb" aria-hidden="true">
            ✦
          </div>
          <span className="assistant-label">{labels.assistantLabel}</span>
          <h3>{labels.assistantTitle}</h3>
          <p>{labels.assistantDescription}</p>
          <textarea
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            maxLength={600}
            placeholder={labels.assistantPlaceholder}
            aria-label={labels.assistantPlaceholder}
            rows="3"
          />
          <div className="assistant-submit-row">
            <small>{question.length}/600</small>
            <button type="submit" disabled={assistantState === 'loading' || !question.trim()}>
              {assistantState === 'loading' ? labels.assistantLoading : labels.assistantAction}
            </button>
          </div>
          {assistantState === 'success' ? (
            <p className="assistant-answer" aria-live="polite">
              {answer}
            </p>
          ) : null}
          {assistantState === 'error' ? (
            <p className="assistant-error" role="alert">
              {labels.assistantUnavailable}
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}
