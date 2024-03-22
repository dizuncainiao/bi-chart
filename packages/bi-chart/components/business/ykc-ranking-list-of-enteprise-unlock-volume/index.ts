import { App } from 'vue'
import ykcRankingListOfEnterpriseUnlockVolume from './YkcRankingListOfEnterpriseUnlockVolume.vue'

const YkcRankingListOfEnterpriseUnlockVolume = Object.assign(
  ykcRankingListOfEnterpriseUnlockVolume,
  {
    install: (app: App) =>
      app.component(
        ykcRankingListOfEnterpriseUnlockVolume.name,
        ykcRankingListOfEnterpriseUnlockVolume
      )
  }
)

export { YkcRankingListOfEnterpriseUnlockVolume as default }
