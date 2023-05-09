import { App } from 'vue'
import basicPie from './BasicPie.vue'

const BasicPie = Object.assign(basicPie, {
  install: (app: App) => app.component(basicPie.name, basicPie)
})

export { BasicPie as default }
