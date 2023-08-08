// https://vitepress.dev/guide/custom-theme
// @ts-ignore
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.less'
import './viewer.css'
import 'dz-bi-chart/dist/es/style.css'
import { AntdTheme } from 'vite-plugin-vitepress-demo/theme'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Demo', AntdTheme)
  }
}
