import { App } from 'vue'
import basicBusinessLayout from './BasicBusinessLayout.vue'

const BasicBusinessLayout = Object.assign(basicBusinessLayout, {
  install: (app: App) =>
    app.component(basicBusinessLayout.name, basicBusinessLayout)
})

export { BasicBusinessLayout as default }
