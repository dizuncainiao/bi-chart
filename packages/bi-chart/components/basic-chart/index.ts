import { App } from 'vue'
import basicChart from './BasicChart.vue'

const BasicChart = Object.assign(basicChart, {
  install: (app: App) => app.component(basicChart.name, basicChart)
})

export { BasicChart as default }
