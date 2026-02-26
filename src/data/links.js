export function getLocalizedData(translations) {
  return {
    profile: {
      name: 'David Alexandre Fernandes',
      tag: '@DavidAlexandre93',
      role: translations.profileRole,
      image: 'https://avatars.githubusercontent.com/DavidAlexandre93',
      imageAlt: 'Foto davidalexandre'
    },
    highlightedProjects: [
      {
        title: 'Website',
        description: translations.projects.websiteDescription,
        href: 'https://daf-web-site.vercel.app/',
        icon: '/assets/icons/book.svg',
        iconAlt: 'ícone livros',
        accent: 'Landing',
        gradient: 'linear-gradient(90deg, #ada9c2 1%, #4e27d8 99%)'
      },
      {
        title: 'Portfólio',
        description: translations.projects.portfolioDescription,
        href: 'https://daf-portfolio.vercel.app/',
        icon: '/assets/icons/code.svg',
        iconAlt: 'ícone feliz',
        accent: 'Case Study',
        gradient: 'linear-gradient(70deg, #afa9c9 1%, #8f61d8 99%)'
      },
      {
        title: 'Bio-Portfolio',
        description: translations.projects.bioDescription,
        href: 'https://bio-portfolio.vercel.app/',
        icon: '/assets/icons/setup.svg',
        iconAlt: 'ícone livros',
        accent: translations.projects.bioAccent,
        gradient: 'linear-gradient(90deg, #a7adc9 1%, #3f67d1 99%)'
      }
    ],
    socialLinks: [
      {
        title: 'Vercel',
        description: translations.projects.vercelDescription,
        href: 'https://www.vercel.com/davidalexandrefernandes',
        icon: '/assets/icons/instagram.svg',
        iconAlt: 'ícone instagram',
        accent: 'Deploy',
        gradient: 'linear-gradient(58deg, #a4a6ad 1%, #25292d 99%)'
      },
      {
        title: 'Linkedin',
        description: translations.projects.linkedinDescription,
        href: 'https://www.linkedin.com/in/david-fernandes-08b005b4/',
        icon: '/assets/icons/linkedin.svg',
        iconAlt: 'ícone linkedin',
        accent: 'Networking',
        gradient: 'linear-gradient(90deg, #a8afc2 1%, #3b339f 99%)'
      },
      {
        title: 'Discord',
        description: translations.projects.discordDescription,
        href: 'https://discord.gg/ZQ5eS4AXc4',
        icon: '/assets/icons/discord.svg',
        iconAlt: 'ícone discord',
        accent: translations.projects.communityAccent,
        gradient: 'linear-gradient(261.65deg, #a6aac1 1%, #243595 99%)'
      },
      {
        title: 'GitHub',
        description: translations.projects.githubDescription,
        href: 'https://github.com/DavidAlexandre93',
        icon: '/assets/icons/github.svg',
        iconAlt: 'ícone github',
        accent: translations.projects.codeAccent,
        gradient: 'linear-gradient(58deg, #a5a7ae 1%, #283137 99%)'
      },
      {
        title: 'E-mail',
        description: translations.projects.emailDescription,
        href: 'https://calendly.com/davidalexandrefernandes',
        icon: '/assets/icons/email.svg',
        iconAlt: 'ícone email',
        accent: translations.projects.contactAccent,
        gradient: 'linear-gradient(58deg, #a8acc1 1%, #15289a 99%)'
      }
    ]
  };
}
