import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/bi-chart/',
  title: 'BI Chart',
  description: 'BI-Chart 图表组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/small-chart' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Quick Start', link: '/quick-start/' },
          { text: 'Small Chart', link: '/small-chart/' },
          { text: 'Big Chart', link: '/big-chart/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  lastUpdated: true,
  vite: {
    server: {
      open: true,
      port: 8888
    },
    ssr: {
      noExternal: ['dz-bi-chart']
    }
  }
})
