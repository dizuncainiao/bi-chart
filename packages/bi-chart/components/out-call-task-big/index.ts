import { App } from 'vue'
import outCallTaskBig from './OutCallTaskBig.vue'

console.log(outCallTaskBig)

const OutCallTaskBig = Object.assign(outCallTaskBig, {
  install: (app: App) => app.component(outCallTaskBig.name, outCallTaskBig)
})

export { OutCallTaskBig as default }
