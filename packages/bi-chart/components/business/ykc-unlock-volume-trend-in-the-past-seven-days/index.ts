import { App } from 'vue'
import ykcUnlockVolumeTrendInThePastSevenDays from './YkcUnlockVolumeTrendInThePastSevenDays.vue'

const YkcUnlockVolumeTrendInThePastSevenDays = Object.assign(
  ykcUnlockVolumeTrendInThePastSevenDays,
  {
    install: (app: App) =>
      app.component(
        ykcUnlockVolumeTrendInThePastSevenDays.name,
        ykcUnlockVolumeTrendInThePastSevenDays
      )
  }
)

export { YkcUnlockVolumeTrendInThePastSevenDays as default }
