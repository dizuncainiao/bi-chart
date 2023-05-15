import { App } from 'vue'
import thingsOutboundConnectionRateRanking from './ThingsOutboundConnectionRateRanking.vue'

const ThingsOutboundConnectionRateRanking = Object.assign(
  thingsOutboundConnectionRateRanking,
  {
    install: (app: App) =>
      app.component(
        thingsOutboundConnectionRateRanking.name,
        thingsOutboundConnectionRateRanking
      )
  }
)

export { ThingsOutboundConnectionRateRanking as default }
