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
    navLabel: 'Primary navigation',
    navProjects: 'Projects',
    navContact: 'Contact',
    available: 'Available for new projects',
    heroEyebrow: 'Creative engineering · Digital products',
    heroIntroduction:
      'I transform ideas into clear, fast, and memorable digital experiences — bringing product thinking, design, and code together.',
    resumeHeading: 'Resume available in three versions',
    openResumeLabel: 'Open resume',
    basedIn: 'Based in',
    projectsEyebrow: 'Selected work',
    projectsTitle: 'Projects',
    projectsDescription:
      'Digital products built to solve real problems with technology, clarity, and measurable impact.',
    hortelanTag: 'AgTech · Connected cultivation',
    hortelanTitle: 'Hortelan AgTech',
    hortelanLead: 'Connected cultivation. Intelligent care.',
    hortelanDescription:
      'Sensor data, safe automation, and shared knowledge to care for gardens clearly, from anywhere.',
    hortelanTechnologies: ['Sensors', 'Automation', 'Data'],
    technologiesLabel: 'Project pillars',
    projectCta: 'Visit website',
    featuredTitle: 'More work',
    featuredDescription: 'Explore more interfaces and digital experiences from my portfolio.',
    socialTitle: 'Contact & Professional Networks',
    socialDescription:
      'Open channels by intent: networking, community, code, deployments, or direct contact.',
    supportTitle: 'Leave a ⭐️ if GitHub projects helped you!',
    footerText: 'Designed and developed with intention by David Alexandre Fernandes.',
    backToTop: 'Back to top',
    backToTopLabel: 'Back to the top of the page',
    projects: {
      websiteDescription: 'Business website focused on conversion and modern design.',
      portfolioDescription:
        'Showcase of case studies, stack, and outcomes with an immersive experience.',
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
    navLabel: 'Navegação principal',
    navProjects: 'Projetos',
    navContact: 'Contato',
    available: 'Disponível para novos projetos',
    heroEyebrow: 'Engenharia criativa · Produtos digitais',
    heroIntroduction:
      'Transformo ideias em experiências digitais claras, rápidas e memoráveis — unindo visão de produto, design e código.',
    resumeHeading: 'Currículo disponível em três versões',
    openResumeLabel: 'Abrir currículo',
    basedIn: 'Baseado no',
    projectsEyebrow: 'Trabalho selecionado',
    projectsTitle: 'Projetos',
    projectsDescription:
      'Produtos digitais criados para resolver problemas reais com tecnologia, clareza e impacto mensurável.',
    hortelanTag: 'AgTech · Cultivo conectado',
    hortelanTitle: 'Hortelan AgTech',
    hortelanLead: 'Cultivo conectado. Cuidado inteligente.',
    hortelanDescription:
      'Dados de sensores, automação segura e conhecimento compartilhado para cuidar de hortas com clareza, de qualquer lugar.',
    hortelanTechnologies: ['Sensores', 'Automação', 'Dados'],
    technologiesLabel: 'Pilares do projeto',
    projectCta: 'Conhecer o projeto',
    featuredTitle: 'Outros trabalhos',
    featuredDescription:
      'Explore outras interfaces e experiências digitais que fazem parte do meu portfólio.',
    socialTitle: 'Contato e Redes Profissionais',
    socialDescription:
      'Acesse os canais por intenção: networking, comunidade, código, deploys ou contato direto.',
    supportTitle: 'Deixe uma ⭐️ se os projetos no GitHub te ajudaram!',
    footerText: 'Desenhado e desenvolvido com intenção por David Alexandre Fernandes.',
    backToTop: 'Voltar ao topo',
    backToTopLabel: 'Voltar ao início da página',
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
    navLabel: 'Navigation principale',
    navProjects: 'Projets',
    navContact: 'Contact',
    available: 'Disponible pour de nouveaux projets',
    heroEyebrow: 'Ingénierie créative · Produits numériques',
    heroIntroduction:
      'Je transforme les idées en expériences numériques claires, rapides et mémorables, en réunissant produit, design et code.',
    resumeHeading: 'CV disponible en trois versions',
    openResumeLabel: 'Ouvrir le CV',
    basedIn: 'Basé au',
    projectsEyebrow: 'Travail sélectionné',
    projectsTitle: 'Projets',
    projectsDescription:
      'Des produits numériques conçus pour résoudre des problèmes réels avec technologie, clarté et impact mesurable.',
    hortelanTag: 'AgTech · Culture connectée',
    hortelanTitle: 'Hortelan AgTech',
    hortelanLead: 'Culture connectée. Soin intelligent.',
    hortelanDescription:
      'Données de capteurs, automatisation sûre et savoir partagé pour prendre soin des jardins, où que vous soyez.',
    hortelanTechnologies: ['Capteurs', 'Automatisation', 'Données'],
    technologiesLabel: 'Piliers du projet',
    projectCta: 'Voir le projet',
    featuredTitle: 'Autres réalisations',
    featuredDescription: 'Explorez d’autres interfaces et expériences numériques de mon portfolio.',
    socialTitle: 'Contact et réseaux professionnels',
    socialDescription:
      'Accédez aux canaux selon l’intention : networking, communauté, code, déploiements ou contact direct.',
    supportTitle: 'Laissez une ⭐️ si les projets GitHub vous ont aidé !',
    footerText: 'Conçu et développé avec intention par David Alexandre Fernandes.',
    backToTop: 'Retour en haut',
    backToTopLabel: 'Retourner en haut de la page',
    projects: {
      websiteDescription: 'Site institutionnel axé sur la conversion et un design moderne.',
      portfolioDescription:
        'Présentation de cas, stack et résultats avec une expérience immersive.',
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
    navLabel: 'メインナビゲーション',
    navProjects: 'プロジェクト',
    navContact: 'お問い合わせ',
    available: '新規プロジェクト受付中',
    heroEyebrow: 'クリエイティブエンジニアリング · デジタルプロダクト',
    heroIntroduction:
      'プロダクト思考、デザイン、コードを組み合わせ、アイデアを明確で高速、印象的なデジタル体験へ変えます。',
    resumeHeading: '3つのバージョンの履歴書',
    openResumeLabel: '履歴書を開く',
    basedIn: '拠点',
    projectsEyebrow: '選りすぐりの実績',
    projectsTitle: 'プロジェクト',
    projectsDescription:
      'テクノロジー、明確さ、測定可能なインパクトで現実の課題を解決するデジタルプロダクト。',
    hortelanTag: 'AgTech · コネクテッド栽培',
    hortelanTitle: 'Hortelan AgTech',
    hortelanLead: 'つながる栽培。スマートなケア。',
    hortelanDescription:
      'センサーデータ、安全な自動化、共有知識で、どこからでも菜園を分かりやすく管理。',
    hortelanTechnologies: ['センサー', '自動化', 'データ'],
    technologiesLabel: 'プロジェクトの柱',
    projectCta: 'サイトを見る',
    featuredTitle: 'その他の実績',
    featuredDescription: 'ポートフォリオにある他のインターフェースやデジタル体験をご覧ください。',
    socialTitle: '連絡先とプロフェッショナルネットワーク',
    socialDescription:
      '目的ごとにチャンネルへアクセス：ネットワーキング、コミュニティ、コード、デプロイ、または直接連絡。',
    supportTitle: 'GitHub のプロジェクトが役立ったら ⭐️ をお願いします！',
    footerText: 'David Alexandre Fernandes が意図を持ってデザイン・開発しました。',
    backToTop: 'トップへ戻る',
    backToTopLabel: 'ページの先頭に戻る',
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

const SUPPORTED_LANGUAGES = Object.keys(translations);

function findLanguageMatch(language) {
  if (!language) {
    return null;
  }

  if (translations[language]) {
    return language;
  }

  const languageCode = language.split('-')[0];
  return SUPPORTED_LANGUAGES.find((key) => key.startsWith(languageCode)) || null;
}

export function normalizeLanguage(language) {
  return findLanguageMatch(language) || DEFAULT_LANGUAGE;
}

export function isSupportedLanguage(language) {
  return Boolean(findLanguageMatch(language));
}

export function getLanguageFromCountry(countryCode) {
  return LANGUAGE_BY_COUNTRY[countryCode?.toUpperCase()] || null;
}

export function getTranslations(language) {
  return translations[normalizeLanguage(language)];
}

export { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES };
