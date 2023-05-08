import {App} from "vue";
import basicBar from './BasicBar.vue'

console.log(basicBar)

const BasicBar = Object.assign(basicBar, {
    install: (app: App) => app.component(basicBar.name, basicBar)
})

export {
    BasicBar as default
}
