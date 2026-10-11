import test from 'node:test';
import assert from 'node:assert/strict';

import { getLocalizedData } from '../data/links.js';
import {
  DEFAULT_LANGUAGE,
  getLanguageFromCountry,
  getTranslations,
  isSupportedLanguage,
  normalizeLanguage
} from '../i18n/translations.js';
import { pickLanguageFromApi, pickLanguageFromBrowser } from '../i18n/languageDetection.js';
import { getDiscoveryResults } from '../hooks/usePortfolioDiscovery.js';

test('normalizeLanguage falls back to default locale', () => {
  assert.equal(normalizeLanguage('de-DE'), DEFAULT_LANGUAGE);
});

test('country code is translated to locale', () => {
  assert.equal(getLanguageFromCountry('br'), 'pt-BR');
  assert.equal(getLanguageFromCountry('xx'), null);
});

test('isSupportedLanguage validates exact and language family matches', () => {
  assert.equal(isSupportedLanguage('pt-BR'), true);
  assert.equal(isSupportedLanguage('pt-PT'), true);
  assert.equal(isSupportedLanguage('de-DE'), false);
});

test('browser preferences fall back to default when unsupported', () => {
  assert.equal(pickLanguageFromBrowser('de-DE', ['it-IT']), DEFAULT_LANGUAGE);
  assert.equal(pickLanguageFromBrowser('pt-PT', ['en-US']), 'pt-BR');
});

test('geolocation prefers API language hints before country fallback', () => {
  const viaLanguageHint = pickLanguageFromApi({
    country_code: 'US',
    languages: 'fr-CA,en-US'
  });

  assert.equal(viaLanguageHint, 'fr-FR');

  const viaCountryFallback = pickLanguageFromApi({
    country_code: 'JP',
    languages: 'ko-KR'
  });

  assert.equal(viaCountryFallback, 'ja-JP');
});

test('getTranslations returns localized metadata', () => {
  const translations = getTranslations('en-US');

  assert.equal(translations.projectsTitle, 'Projects');
  assert.equal(translations.featuredTitle, 'More work');
  assert.equal(translations.hortelanTitle, 'Hortelan AgTech');
  assert.equal(translations.hortelanTechnologies.length, 3);
  assert.equal(translations.newsletterButton, 'Subscribe on LinkedIn');
  assert.equal(translations.openEducationLabel, 'Open David’s education page');
  assert.match(translations.projects.githubDescription, /Repositories/);
});

test('getLocalizedData creates complete frontend cards', () => {
  const translations = getTranslations('pt-BR');
  const data = getLocalizedData(translations);

  assert.equal(data.profile.role, 'Engenheiro de software');
  assert.equal(data.featuredProject.title, 'Hortelan AgTech');
  assert.equal(data.highlightedProjects.length, 2);
  assert.equal(data.socialLinks.length, 5);
});

test('portfolio discovery ranks matching title and metadata locally', () => {
  const links = [
    { title: 'GitHub', description: 'Repositories', accent: 'Code', searchTerms: ['technical'] },
    {
      title: 'Hortelan',
      description: 'Connected cultivation',
      accent: 'AgTech',
      searchTerms: ['sensors', 'data']
    }
  ];

  assert.equal(getDiscoveryResults(links, 'data sensors')[0].title, 'Hortelan');
  assert.equal(getDiscoveryResults(links, 'unknown').length, 0);
});
