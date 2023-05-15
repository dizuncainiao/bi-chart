import { App } from 'vue'
import thingsOutboundConnectionNumberRanking from './ThingsOutboundConnectionNumberRanking.vue'

const ThingsOutboundConnectionNumberRanking = Object.assign(
  thingsOutboundConnectionNumberRanking,
  {
    install: (app: App) =>
      app.component(
        thingsOutboundConnectionNumberRanking.name,
        thingsOutboundConnectionNumberRanking
      )
  }
)

export { ThingsOutboundConnectionNumberRanking as default }
