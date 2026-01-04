import { defineConfig } from 'vitepress'
import sidebarEn from './sidebars/en.mjs'
import sidebarZh from './sidebars/zh.mjs'

const base = process.env.BASE || '/'


export default defineConfig({
  title: 'Airalogy Docs',
  description: 'Documentation for Airalogy',
  base,
  cleanUrls: true,
  locales: {
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Airalogy Python Package', link: 'https://airalogy.github.io/airalogy/en/' }
        ],
        sidebar: sidebarEn
      }
    },
    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [{ text: 'Airalogy Python 包文档', link: 'https://airalogy.github.io/airalogy/zh/' }],
        sidebar: sidebarZh
      }
    }
  },
  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg'
    },
    search: {
      provider: 'local'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/airalogy/docs' }]
  }
})
