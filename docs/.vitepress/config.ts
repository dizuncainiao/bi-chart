import { defineConfig } from 'vitepress'
import VitePluginVitePressDemo from 'vite-plugin-vitepress-demo'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/bi-chart/',
  title: 'BI CHART',
  description: 'BDSaas 图表组件库',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/small-chart-layout/' },
      { text: '更新日志', link: '/change-log/' },
      { text: '进阶主题', link: '/advanced-use/' }
    ],

    sidebar: [
      {
        text: '使用指南',
        items: [{ text: '快速开始', link: '/quick-start/' }]
      },
      {
        text: '基础布局',
        items: [{ text: '小报表布局', link: '/small-chart-layout/' }]
      },
      {
        text: '基础图表',
        items: [
          { text: '条形图', link: '/basic-bar/' },
          { text: '饼图', link: '/basic-pie/' },
        ]
      },
      {
        text: '业务图表',
        items: [
          {
            text: '外呼次数排行榜（事儿电话）',
            link: '/things-outbound-number-ranking/'
          }
        ]
      }
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/dizuncainiao/bi-chart/tree/main'
      }
    ]
  },
  lastUpdated: true,
  vite: {
    server: {
      port: 6688
    },
    ssr: {
      noExternal: ['dz-bi-chart', 'v-viewer']
    },
    plugins: [VitePluginVitePressDemo()]
  }
})
