import { useEffect, useState } from 'react';
import { DEFAULT_LANGUAGE, getLanguageFromCountry, normalizeLanguage } from '../i18n/translations';

const GEOLOCATION_ENDPOINT = 'https://ipapi.co/json/';

function pickLanguageFromApi(data) {
  const mappedLanguage = getLanguageFromCountry(data?.country_code);

  if (mappedLanguage) {
    return mappedLanguage;
  }

  const firstLanguage = data?.languages?.split(',')?.[0];
  return firstLanguage ? normalizeLanguage(firstLanguage) : null;
}

export function useGeolocatedLanguage() {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const browserLanguage = normalizeLanguage(navigator.language);
    setLanguage(browserLanguage);

    async function detectCountryLanguage() {
      try {
        const response = await fetch(GEOLOCATION_ENDPOINT, {
          headers: { Accept: 'application/json' }
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
      }
    }

    detectCountryLanguage();
  }, []);

  return language;
}
