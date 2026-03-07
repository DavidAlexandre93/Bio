import {
  DEFAULT_LANGUAGE,
  getLanguageFromCountry,
  isSupportedLanguage,
  normalizeLanguage
} from './translations.js';

function pickSupportedLanguage(candidate) {
  if (!candidate || !isSupportedLanguage(candidate)) {
    return null;
  }

  return normalizeLanguage(candidate);
}

export function pickLanguageFromApi(data) {
  const languageHints = data?.languages
    ?.split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);

  for (const hint of languageHints || []) {
    const detected = pickSupportedLanguage(hint);

    if (detected) {
      return detected;
    }
  }

  return pickSupportedLanguage(getLanguageFromCountry(data?.country_code));
}

export function pickLanguageFromBrowser(browserLanguage, browserLanguages = []) {
  const browserCandidates = [browserLanguage, ...browserLanguages];

  for (const candidate of browserCandidates) {
    const detected = pickSupportedLanguage(candidate);

    if (detected) {
      return detected;
    }
  }

  return DEFAULT_LANGUAGE;
}
