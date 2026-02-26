const LANGUAGE_BY_COUNTRY = {
  BR: 'pt-BR',
  FR: 'fr-FR',
  US: 'en-US',
  JP: 'ja-JP'
};

const DEFAULT_LANGUAGE = 'en-US';

const translations = {
  'en-US': {
    profileRole: 'Software engineer',
    featuredTitle: 'Featured projects',
    featuredDescription: 'Choose the experience you want to explore first: business website, full portfolio, or personal hub.',
    socialTitle: 'Contact & Professional Networks',
    socialDescription: 'Open channels by intent: networking, community, code, deployments, or direct contact.',
    supportTitle: 'Leave a ⭐️ if GitHub projects helped you!',
    projects: {
      websiteDescription: 'Business website focused on conversion and modern design.',
      portfolioDescription: 'Showcase of case studies, stack, and outcomes with an immersive experience.',
      bioDescription: 'Smart links page to access resources quickly.',
      vercelDescription: 'Deploys, projects, and presence in the frontend ecosystem.',
      linkedinDescription: 'Professional profile with trajectory and recommendations.',
      discordDescription: 'Community and quick exchanges with other developers.',
      githubDescription: 'Repositories, contributions, and technical history.',
      emailDescription: 'Direct scheduling for conversations and partnerships.',
      bioAccent: 'Personal hub',
      communityAccent: 'Community',
      contactAccent: 'Contact',
      codeAccent: 'Code'
    }
  },
  'pt-BR': {
    profileRole: 'Engenheiro de software',
    featuredTitle: 'Projetos em destaque',
    featuredDescription: 'Selecione a experiência que quer explorar primeiro: institucional, portfólio completo ou hub pessoal.',
    socialTitle: 'Contato e Redes Profissionais',
    socialDescription: 'Acesse os canais por intenção: networking, comunidade, código, deploys ou contato direto.',
    supportTitle: 'Deixe uma ⭐️ se os projetos no GitHub te ajudaram!',
    projects: {
      websiteDescription: 'Site institucional com foco em conversão e design moderno.',
      portfolioDescription: 'Mostra de cases, stack e resultados com experiência imersiva.',
      bioDescription: 'Página de links inteligente para acessar recursos rapidamente.',
      vercelDescription: 'Deploys, projetos e presença no ecossistema frontend.',
      linkedinDescription: 'Perfil profissional com trajetória e recomendações.',
      discordDescription: 'Comunidade e troca rápida com outros devs.',
      githubDescription: 'Repositórios, contribuições e histórico técnico.',
      emailDescription: 'Agendamento direto para conversas e parcerias.',
      bioAccent: 'Hub pessoal',
      communityAccent: 'Comunidade',
      contactAccent: 'Contato',
      codeAccent: 'Código'
    }
  },
  'fr-FR': {
    profileRole: 'Ingénieur logiciel',
    featuredTitle: 'Projets en vedette',
    featuredDescription: 'Choisissez l’expérience à explorer en premier : site institutionnel, portfolio complet ou hub personnel.',
    socialTitle: 'Contact et réseaux professionnels',
    socialDescription: 'Accédez aux canaux selon l’intention : networking, communauté, code, déploiements ou contact direct.',
    supportTitle: 'Laissez une ⭐️ si les projets GitHub vous ont aidé !',
    projects: {
      websiteDescription: 'Site institutionnel axé sur la conversion et un design moderne.',
      portfolioDescription: 'Présentation de cas, stack et résultats avec une expérience immersive.',
      bioDescription: 'Page de liens intelligente pour accéder rapidement aux ressources.',
      vercelDescription: 'Déploiements, projets et présence dans l’écosystème frontend.',
      linkedinDescription: 'Profil professionnel avec parcours et recommandations.',
      discordDescription: 'Communauté et échanges rapides avec d’autres développeurs.',
      githubDescription: 'Dépôts, contributions et historique technique.',
      emailDescription: 'Planification directe pour des échanges et partenariats.',
      bioAccent: 'Hub personnel',
      communityAccent: 'Communauté',
      contactAccent: 'Contact',
      codeAccent: 'Code'
    }
  },
  'ja-JP': {
    profileRole: 'ソフトウェアエンジニア',
    featuredTitle: '注目プロジェクト',
    featuredDescription: '最初に見たい体験を選択してください：企業サイト、フルポートフォリオ、または個人ハブ。',
    socialTitle: '連絡先とプロフェッショナルネットワーク',
    socialDescription: '目的ごとにチャンネルへアクセス：ネットワーキング、コミュニティ、コード、デプロイ、または直接連絡。',
    supportTitle: 'GitHub のプロジェクトが役立ったら ⭐️ をお願いします！',
    projects: {
      websiteDescription: 'コンバージョンとモダンなデザインに重点を置いた企業サイト。',
      portfolioDescription: '没入感のある体験で、事例・技術スタック・成果を紹介。',
      bioDescription: 'リソースへ素早くアクセスできるスマートリンクページ。',
      vercelDescription: 'デプロイ、プロジェクト、そしてフロントエンドエコシステムでの活動。',
      linkedinDescription: '経歴と推薦を含むプロフェッショナルプロフィール。',
      discordDescription: '他の開発者とのコミュニティと素早い交流。',
      githubDescription: 'リポジトリ、貢献履歴、技術的な実績。',
      emailDescription: '相談や提携のための直接スケジュール。',
      bioAccent: '個人ハブ',
      communityAccent: 'コミュニティ',
      contactAccent: '連絡',
      codeAccent: 'コード'
    }
  }
};

export function normalizeLanguage(language) {
  if (translations[language]) {
    return language;
  }

  const languageCode = language?.split('-')[0];
  const languageMatch = Object.keys(translations).find((key) => key.startsWith(languageCode));

  return languageMatch || DEFAULT_LANGUAGE;
}

export function getLanguageFromCountry(countryCode) {
  return LANGUAGE_BY_COUNTRY[countryCode?.toUpperCase()] || null;
}

export function getTranslations(language) {
  return translations[normalizeLanguage(language)];
}

export { DEFAULT_LANGUAGE };
