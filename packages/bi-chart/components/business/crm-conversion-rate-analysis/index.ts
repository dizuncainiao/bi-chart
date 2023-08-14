import { App } from 'vue'
import crmConversionRateAnalysis from './CrmConversionRateAnalysis.vue'

const CrmConversionRateAnalysis = Object.assign(crmConversionRateAnalysis, {
  install: (app: App) =>
    app.component(crmConversionRateAnalysis.name, crmConversionRateAnalysis)
})

export { CrmConversionRateAnalysis as default }
