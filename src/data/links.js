export function getLocalizedData(translations) {
  return {
    profile: {
      name: 'David Alexandre Fernandes',
      tag: '@DavidAlexandre93',
      role: translations.profileRole,
      image: '/assets/image/perfil-social.jpeg',
      imageAlt: 'Retrato profissional de David Alexandre Fernandes'
    },
    featuredProject: {
      title: translations.hortelanTitle,
      description: translations.hortelanDescription,
      href: 'https://www.hortelanagtech.com/',
      icon: '/assets/icons/code.svg',
      iconAlt: translations.hortelanTitle,
      accent: translations.hortelanTag,
      searchTerms: ['data', 'sensors', 'automation', 'agtech', 'connected cultivation']
    },
    highlightedProjects: [
      {
        title: 'Website',
        description: translations.projects.websiteDescription,
        href: 'https://daf-web-site.vercel.app/',
        icon: '/assets/icons/website.svg',
        iconAlt: 'Ícone de website',
        accent: 'Landing',
        searchTerms: ['build', 'product', 'conversion', 'interface'],
        gradient: 'linear-gradient(90deg, #ada9c2 1%, #4e27d8 99%)'
      },
      {
        title: 'Portfólio',
        description: translations.projects.portfolioDescription,
        href: 'https://daf-portfolio.vercel.app/',
        icon: '/assets/icons/code.svg',
        iconAlt: 'Ícone de código',
        accent: 'Case Study',
        searchTerms: ['build', 'case study', 'design', 'product'],
        gradient: 'linear-gradient(70deg, #afa9c9 1%, #8f61d8 99%)'
      }
    ],
    socialLinks: [
      {
        title: 'Vercel',
        description: translations.projects.vercelDescription,
        href: 'https://www.vercel.com/davidalexandrefernandes',
        icon: '/assets/icons/vercel.svg',
        iconAlt: 'Ícone da Vercel',
        accent: 'Deploy',
        searchTerms: ['deploy', 'frontend', 'projects'],
        gradient: 'linear-gradient(58deg, #a4a6ad 1%, #25292d 99%)'
      },
      {
        title: 'Linkedin',
        description: translations.projects.linkedinDescription,
        href: 'https://www.linkedin.com/in/david-fernandes-08b005b4/',
        icon: '/assets/icons/linkedin.svg',
        iconAlt: 'ícone linkedin',
        accent: 'Networking',
        searchTerms: ['contact', 'network', 'professional'],
        gradient: 'linear-gradient(90deg, #a8afc2 1%, #3b339f 99%)'
      },
      {
        title: 'Discord',
        description: translations.projects.discordDescription,
        href: 'https://discord.gg/ZQ5eS4AXc4',
        icon: '/assets/icons/discord.svg',
        iconAlt: 'ícone discord',
        accent: translations.projects.communityAccent,
        searchTerms: ['connect', 'community', '交流'],
        gradient: 'linear-gradient(261.65deg, #a6aac1 1%, #243595 99%)'
      },
      {
        title: 'GitHub',
        description: translations.projects.githubDescription,
        href: 'https://github.com/DavidAlexandre93',
        icon: '/assets/icons/github.svg',
        iconAlt: 'ícone github',
        accent: translations.projects.codeAccent,
        searchTerms: ['code', 'technical', 'repositories'],
        gradient: 'linear-gradient(58deg, #a5a7ae 1%, #283137 99%)'
      },
      {
        title: 'Calendly',
        description: translations.projects.emailDescription,
        href: 'https://calendly.com/davidalexandrefernandes',
        icon: '/assets/icons/calendar.svg',
        iconAlt: 'Ícone de calendário',
        accent: translations.projects.contactAccent,
        searchTerms: ['contact', 'schedule', 'partnership'],
        gradient: 'linear-gradient(58deg, #a8acc1 1%, #15289a 99%)'
      }
    ]
  };
}
