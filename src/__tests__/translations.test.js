import test from 'node:test';
import assert from 'node:assert/strict';

import { getLocalizedData } from '../data/links.js';
import {
  DEFAULT_LANGUAGE,
  getLanguageFromCountry,
  getTranslations,
  normalizeLanguage
} from '../i18n/translations.js';

test('normalizeLanguage falls back to default locale', () => {
  assert.equal(normalizeLanguage('de-DE'), DEFAULT_LANGUAGE);
});

test('country code is translated to locale', () => {
  assert.equal(getLanguageFromCountry('br'), 'pt-BR');
  assert.equal(getLanguageFromCountry('xx'), null);
});

test('getTranslations returns localized metadata', () => {
  const translations = getTranslations('en-US');

  assert.equal(translations.featuredTitle, 'Featured projects');
  assert.match(translations.projects.githubDescription, /Repositories/);
});

test('getLocalizedData creates complete frontend cards', () => {
  const translations = getTranslations('pt-BR');
  const data = getLocalizedData(translations);

  assert.equal(data.profile.role, 'Engenheiro de software');
  assert.equal(data.highlightedProjects.length, 3);
  assert.equal(data.socialLinks.length, 5);
});
