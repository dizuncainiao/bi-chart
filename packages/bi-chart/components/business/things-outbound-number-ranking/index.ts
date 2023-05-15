import { App } from 'vue'
import thingsOutboundNumberRanking from './ThingsOutboundNumberRanking.vue'

const ThingsOutboundNumberRanking = Object.assign(thingsOutboundNumberRanking, {
  install: (app: App) =>
    app.component(thingsOutboundNumberRanking.name, thingsOutboundNumberRanking)
})

export { ThingsOutboundNumberRanking as default }
