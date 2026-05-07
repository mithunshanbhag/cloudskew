import { viteBundler } from '@vuepress/bundler-vite'
import { feedPlugin } from '@vuepress/plugin-feed'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: 'CloudSkew blog',
  description: 'Draw AWS, Azure, GCP, Kubernetes diagrams for free',
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
      { text: 'Posts', link: '/' },
      { text: 'Tags', link: '/tag/' },
      { text: 'Go To CloudSkew Website', link: 'https://www.cloudskew.com' },
    ],
  }),
  plugins: [
    sitemapPlugin({
      hostname: 'https://blog.cloudskew.com',
    }),
    feedPlugin({
      hostname: 'https://blog.cloudskew.com',
      atom: true,
      rss: true,
      json: true,
      icon: '/assets/cloudskew-logo.png',
      filter: (page) => page.filePathRelative?.startsWith('_posts/') ?? false,
      sorter: (pageA, pageB) => {
        const dateA = Date.parse(String(pageA.frontmatter.date ?? ''))
        const dateB = Date.parse(String(pageB.frontmatter.date ?? ''))

        return dateB - dateA
      },
    }),
  ],
})
