import { App } from 'vue'
import outCallNumRankBig from './OutCallNumRankBig.vue'

const OutCallNumRankBig = Object.assign(outCallNumRankBig, {
  install: (app: App) =>
    app.component(outCallNumRankBig.name, outCallNumRankBig)
})

export { OutCallNumRankBig as default }
