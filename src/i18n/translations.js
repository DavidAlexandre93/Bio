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
    discoveryEyebrow: 'Explore by intent',
    discoveryTitle: 'Find the right starting point.',
    discoveryDescription:
      'Search the work by what you need, or ask the portfolio assistant for a grounded answer.',
    discoverySearchLabel: 'Search projects and links',
    discoveryPlaceholder: 'Try “data”, “code”, or “contact”',
    clearSearch: 'Clear search',
    discoveryIntentsLabel: 'Suggested intents',
    discoveryEmpty: 'No matching route yet. Try a broader intent.',
    intents: {
      build: 'Build a product',
      code: 'See the code',
      connect: 'Connect',
      data: 'Explore data'
    },
    assistantLabel: 'Contextual AI',
    assistantTitle: 'Ask about David’s work.',
    assistantDescription: 'A focused assistant grounded in this portfolio, not a generic chatbot.',
    assistantPlaceholder: 'What kind of product does David build?',
    assistantAction: 'Ask assistant',
    assistantLoading: 'Thinking...',
    assistantUnavailable: 'The assistant is offline right now. Discovery still works below.',
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
    discoveryEyebrow: 'Explore por intenção',
    discoveryTitle: 'Encontre o ponto de partida certo.',
    discoveryDescription: 'Busque pelo que você precisa ou pergunte ao assistente do portfólio.',
    discoverySearchLabel: 'Buscar projetos e links',
    discoveryPlaceholder: 'Experimente “dados”, “código” ou “contato”',
    clearSearch: 'Limpar busca',
    discoveryIntentsLabel: 'Sugestões',
    discoveryEmpty: 'Nenhuma rota encontrada. Tente uma intenção mais ampla.',
    intents: {
      build: 'Criar um produto',
      code: 'Ver o código',
      connect: 'Conectar',
      data: 'Explorar dados'
    },
    assistantLabel: 'IA contextual',
    assistantTitle: 'Pergunte sobre o trabalho do David.',
    assistantDescription: 'Um assistente focado neste portfólio, não um chatbot genérico.',
    assistantPlaceholder: 'Que tipo de produto o David cria?',
    assistantAction: 'Perguntar',
    assistantLoading: 'Pensando...',
    assistantUnavailable: 'O assistente está offline. A descoberta continua funcionando abaixo.',
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
    discoveryEyebrow: 'Explorer par intention',
    discoveryTitle: 'Trouvez le bon point de départ.',
    discoveryDescription: 'Recherchez selon votre besoin ou interrogez l’assistant du portfolio.',
    discoverySearchLabel: 'Rechercher projets et liens',
    discoveryPlaceholder: 'Essayez « données », « code » ou « contact »',
    clearSearch: 'Effacer la recherche',
    discoveryIntentsLabel: 'Suggestions',
    discoveryEmpty: 'Aucun résultat. Essayez une intention plus large.',
    intents: {
      build: 'Créer un produit',
      code: 'Voir le code',
      connect: 'Se connecter',
      data: 'Explorer les données'
    },
    assistantLabel: 'IA contextuelle',
    assistantTitle: 'Posez une question sur le travail de David.',
    assistantDescription: 'Un assistant centré sur ce portfolio, pas un chatbot générique.',
    assistantPlaceholder: 'Quel type de produit David crée-t-il ?',
    assistantAction: 'Demander',
    assistantLoading: 'Réflexion...',
    assistantUnavailable: 'L’assistant est momentanément indisponible. La découverte reste active.',
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
    discoveryEyebrow: '目的から探す',
    discoveryTitle: 'ぴったりの入口を見つける。',
    discoveryDescription: '目的から作品を検索するか、ポートフォリオのアシスタントに質問できます。',
    discoverySearchLabel: 'プロジェクトとリンクを検索',
    discoveryPlaceholder: '「データ」「コード」「連絡先」など',
    clearSearch: '検索をクリア',
    discoveryIntentsLabel: 'おすすめ',
    discoveryEmpty: '一致する項目がありません。別の目的を試してください。',
    intents: {
      build: 'プロダクトを作る',
      code: 'コードを見る',
      connect: 'つながる',
      data: 'データを探索'
    },
    assistantLabel: 'コンテキストAI',
    assistantTitle: 'Davidの仕事について質問する。',
    assistantDescription:
      '一般的なチャットボットではなく、このポートフォリオに特化したアシスタントです。',
    assistantPlaceholder: 'Davidはどんなプロダクトを作りますか？',
    assistantAction: '質問する',
    assistantLoading: '考え中...',
    assistantUnavailable: 'アシスタントは現在オフラインです。検索は引き続き利用できます。',
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
