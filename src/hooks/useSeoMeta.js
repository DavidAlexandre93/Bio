import { useEffect } from 'react';

const SITE_URL = 'https://bio-portfolio.vercel.app';
const OG_IMAGE = `${SITE_URL}/assets/image/preview.png`;

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

export function useSeoMeta({ language, profile }) {
  useEffect(() => {
    const titleByLanguage = {
      'pt-BR': 'Bio // David Alexandre Fernandes | Portfólio e Contato',
      'en-US': 'Bio // David Alexandre Fernandes | Portfolio & Contact',
      'fr-FR': 'Bio // David Alexandre Fernandes | Portfolio et Contact',
      'ja-JP': 'Bio // David Alexandre Fernandes | ポートフォリオと連絡先'
    };

    const descriptionByLanguage = {
      'pt-BR': 'Hub oficial com portfólio, links profissionais, currículos e canais de contato do David Alexandre Fernandes.',
      'en-US': 'Official hub with portfolio, professional links, resumes, and contact channels from David Alexandre Fernandes.',
      'fr-FR': 'Hub officiel avec portfolio, liens professionnels, CV et canaux de contact de David Alexandre Fernandes.',
      'ja-JP': 'David Alexandre Fernandes の公式ハブ。ポートフォリオ、プロフェッショナルリンク、履歴書、連絡先を掲載。'
    };

    const title = titleByLanguage[language] || titleByLanguage['en-US'];
    const description = descriptionByLanguage[language] || descriptionByLanguage['en-US'];
    const canonical = `${SITE_URL}/`;

    document.title = title;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index,follow,max-image-preview:large' });

    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonical });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: OG_IMAGE });

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: OG_IMAGE });

    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonical });
    upsertLink('link[rel="icon"]', { rel: 'icon', href: profile.image, type: 'image/png' });
    upsertLink('link[rel="shortcut icon"]', { rel: 'shortcut icon', href: profile.image, type: 'image/png' });

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      url: SITE_URL,
      image: profile.image,
      jobTitle: profile.role,
      sameAs: [
        'https://github.com/DavidAlexandre93',
        'https://www.linkedin.com/in/david-fernandes-08b005b4/',
        'https://www.vercel.com/davidalexandrefernandes'
      ]
    };

    let schemaScript = document.head.querySelector('script[data-schema="person"]');

    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-schema', 'person');
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify(jsonLd);
  }, [language, profile.image, profile.name, profile.role]);
}
