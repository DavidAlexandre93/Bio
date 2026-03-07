import { useEffect, useState } from 'react';
import { DEFAULT_LANGUAGE } from '../i18n/translations.js';
import { pickLanguageFromApi, pickLanguageFromBrowser } from '../i18n/languageDetection.js';

const GEOLOCATION_ENDPOINT = 'https://ipapi.co/json/';
const GEOLOCATION_TIMEOUT_MS = 2500;

export function useGeolocatedLanguage() {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const browserLanguage = pickLanguageFromBrowser(navigator.language, navigator.languages || []);
    setLanguage(browserLanguage);

    async function detectCountryLanguage() {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), GEOLOCATION_TIMEOUT_MS);

      try {
        const response = await fetch(GEOLOCATION_ENDPOINT, {
          headers: { Accept: 'application/json' },
          signal: controller.signal
        });

        if (!response.ok) {
          return;
        }

        const data = await response.json();
        const detectedLanguage = pickLanguageFromApi(data);

        if (detectedLanguage) {
          setLanguage(detectedLanguage);
        }
      } catch {
        // Fallback keeps browser language.
      } finally {
        clearTimeout(timeoutId);
      }
    }

    detectCountryLanguage();
  }, []);

  return language;
}
