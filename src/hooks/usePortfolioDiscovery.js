import { useMemo, useState } from 'react';

const INTENT_TERMS = {
  build: ['build', 'product', 'produto', 'website', 'site', 'interface'],
  code: ['code', 'codigo', 'código', 'github', 'technical', 'técnico'],
  connect: ['contact', 'contato', 'network', 'networking', 'community', 'comunidade'],
  data: ['data', 'dados', 'sensor', 'automation', 'automação', 'agtech']
};

function normalize(value) {
  return value
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function scoreLink(link, query) {
  const normalizedQuery = normalize(query).trim();
  if (!normalizedQuery) return 0;

  const haystack = normalize(
    [link.title, link.description, link.accent, ...(link.searchTerms || [])].join(' ')
  );
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);

  return terms.reduce((score, term) => {
    if (haystack.includes(term))
      return score + (link.title.toLocaleLowerCase().includes(term) ? 4 : 2);
    return score;
  }, 0);
}

export function getDiscoveryResults(links, query) {
  return links
    .map((link, index) => ({ link, score: scoreLink(link, query), index }))
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score || left.index - right.index)
    .map(({ link }) => link);
}

export function getIntentQuery(intent) {
  return (INTENT_TERMS[intent] || []).join(' ');
}

export function usePortfolioDiscovery(links) {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    if (!query.trim()) return links.slice(0, 3);
    return getDiscoveryResults(links, query);
  }, [links, query]);

  return { query, setQuery, results };
}
