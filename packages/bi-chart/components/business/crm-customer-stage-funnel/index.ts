import { App } from 'vue'
import crmCustomerStageFunnel from './CrmCustomerStageFunnel.vue'

const CrmCustomerStageFunnel = Object.assign(crmCustomerStageFunnel, {
  install: (app: App) =>
    app.component(crmCustomerStageFunnel.name, crmCustomerStageFunnel)
})

export { CrmCustomerStageFunnel as default }
