import { App } from 'vue'
import basicBusinessLayout from './BasicBusinessLayout.vue'
import basicSmallLayout from './BasicSmallLayout.vue'
import dateSelect from './date-select/DateSelect.vue'
import depSelect from './dep-select/DepSelect.vue'

const BasicBusinessLayout = Object.assign(basicBusinessLayout, {
  install: (app: App) =>
    app.component(basicBusinessLayout.name, basicBusinessLayout)
})

const BasicSmallLayout = Object.assign(basicSmallLayout, {
  install: (app: App) => app.component(basicSmallLayout.name, basicSmallLayout)
})

const DateSelect = Object.assign(dateSelect, {
  install: (app: App) => app.component(dateSelect.name, dateSelect)
})

const DepSelect = Object.assign(depSelect, {
  install: (app: App) => app.component(depSelect.name, depSelect)
})

export {
  BasicBusinessLayout as default,
  BasicSmallLayout,
  DepSelect,
  DateSelect
}
