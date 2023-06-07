import { App } from 'vue'
import testFunnelBig from './TestFunnelBig.vue'

const TestFunnelBig = Object.assign(testFunnelBig, {
  install: (app: App) => app.component(testFunnelBig.name, testFunnelBig)
})

export { TestFunnelBig as default }
