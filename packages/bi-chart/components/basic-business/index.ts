import { App } from 'vue'
import basicBusinessLayout from './BasicBusinessLayout.vue'
import basicSmallLayout from './BasicSmallLayout.vue'

const BasicBusinessLayout = Object.assign(basicBusinessLayout, {
  install: (app: App) =>
    app.component(basicBusinessLayout.name, basicBusinessLayout)
})

const BasicSmallLayout = Object.assign(basicSmallLayout, {
  install: (app: App) => app.component(basicSmallLayout.name, basicSmallLayout)
})

export { BasicBusinessLayout as default, BasicSmallLayout }
