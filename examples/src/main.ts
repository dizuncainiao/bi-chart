import '@/assets/style/base.less'
import 'bdsaas-bc/dist/es/style.css'
import 'blocks-next/theme-default/index.css'
// 引入项目内的样式
import 'dz-bi-chart/style/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initRequestInterceptors } from 'dz-bi-chart'

function getToken() {
  return 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiIyNzk3IiwiZXhwIjoxNjg2MTI3ODU0fQ.DbYuEoiihanktkxiL9WzvMYt0Vm8IkddTzPr5MHZa44J-tRjbqAsRKZEo6G0QIGwpoyxs7ZiASkVEVUg7szwKw'
}

function getCompanyId() {
  return 704
}

initRequestInterceptors(config => {
  config.headers.Authorization = `Bearer ${getToken()}`
  config.headers.companyId = 704
  config.headers.profileId = 2797
  config.params = {
    ...config.params,
    COMPANYID: getCompanyId()
  }
  return config
})

createApp(App).use(router).mount('#app')
