import '@/assets/style/base.less'
import 'bdsaas-bc/dist/es/style.css'
import 'blocks-next/theme-default/index.css'
import '@/plugins/bi-chart'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
