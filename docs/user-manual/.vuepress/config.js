import { viteBundler } from '@vuepress/bundler-vite'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'CloudSkew',
  description: 'Online Diagram, Flowchart Maker',
  head: [
    ['link', { rel: 'icon', href: '/assets/cloudskew-logo.png' }],
  ],
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/assets/cloudskew-logo.png',
    editLink: false,
    lastUpdated: false,
    contributors: false,

    navbar: [
      { text: 'Samples', link: '/docs/samples' },
      { text: 'Docs', link: '/docs/frequently-asked-questions' },
      { text: 'Go To App', link: 'https://app.cloudskew.com' },
      { text: 'Status', link: '/status/current-status' },
      { text: 'Blog', link: 'https://blog.cloudskew.com' },
      {
        text: 'About',
        link: '/about/',
        children: [
          {
            text: 'Company',
            children: [
              { text: 'Attribution', link: '/about/attribution' },
              { text: 'CloudSkew Architecture', link: '/about/cloudskew-architecture' },
              { text: 'Professional Services', link: '/about/professional-services' },
            ],
          },
          {
            text: 'Legal',
            children: [
              { text: 'Privacy Policy', link: '/about/privacy-policy' },
              { text: 'Terms of Service', link: '/about/terms-of-service' },
            ],
          },
          {
            text: 'Project',
            children: [
              { text: 'Issues', link: 'https://github.com/cloudskew/cloudskew/issues' },
              { text: 'Release Notes', link: 'https://github.com/cloudskew/cloudskew/releases' },
            ],
          },
          {
            text: 'Contact Us',
            children: [
              { text: 'Email', link: 'mailto:support@cloudskew.com' },
              { text: 'GitHub', link: 'https://github.com/cloudskew/cloudskew' },
              { text: 'Twitter', link: 'https://twitter.com/mithunshanbhag' },
              { text: 'YouTube', link: 'https://www.youtube.com/channel/UCc4Y5F4UcCl-KoNskDqdW6w' },
            ],
          },
        ],
      },
    ],

    sidebar: {
      '/about/': getAboutSidebar(),
      '/articles/': getArticlesSidebar(),
      '/docs/': getDocsSidebar(),
      '/status/': getStatusSidebar(),
    },
  }),
  plugins: [
    googleAnalyticsPlugin({
      id: 'UA-96116826-3',
    }),
    sitemapPlugin({
      hostname: 'https://docs.cloudskew.com',
      excludePaths: [
        '/articles/cross-cutting-concerns-for-cloud-architectures.html',
      ],
    }),
  ],
})

function getAboutSidebar() {
  return [
    {
      text: 'About',
      collapsible: false,
      children: [
        'attribution',
        'cloudskew-architecture',
        'privacy-policy',
        'professional-services',
        'terms-of-service',
      ],
    },
  ]
}

function getArticlesSidebar() {
  return [
    {
      text: 'Articles',
      collapsible: false,
      children: [
        'cross-cutting-concerns-for-cloud-architectures',
      ],
    },
  ]
}

function getDocsSidebar() {
  return [
    {
      text: 'Docs',
      collapsible: false,
      children: [
        'features',
        'frequently-asked-questions',
        'keyboard-shortcuts',
        'samples',
      ],
    },
  ]
}

function getStatusSidebar() {
  return [
    {
      text: 'Status',
      collapsible: false,
      children: [
        'current-status',
        'past-incident-reports',
      ],
    },
  ]
}
