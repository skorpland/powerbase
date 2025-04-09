export const siteConfig = {
  name: 'Powerbase Design System',
  url: 'https://powerbase.club/design-system',
  ogImage: 'https://powerbase.club/design-system/og.jpg',
  description: 'Design System of Powerbase',
  links: {
    twitter: 'https://twitter.com/powerbase',
    github: 'https://github.com/skorpland/powerbase/tree/master/apps/design-system',
    credits: {
      radix: 'https://www.radix-ui.com/themes/docs/overview/getting-started',
      shadcn: 'https://ui.shadcn.com/',
      geist: 'https://vercel.com/geist/introduction',
    },
  },
}

export type SiteConfig = typeof siteConfig
