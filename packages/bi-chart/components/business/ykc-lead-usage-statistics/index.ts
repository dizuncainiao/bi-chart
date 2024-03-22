import { App } from 'vue'
import ykcLeadUsageStatistics from './YkcLeadUsageStatistics.vue'

const YkcLeadUsageStatistics = Object.assign(ykcLeadUsageStatistics, {
  install: (app: App) =>
    app.component(ykcLeadUsageStatistics.name, ykcLeadUsageStatistics)
})

export { YkcLeadUsageStatistics as default }
