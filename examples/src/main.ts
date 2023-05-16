import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'dz-bi-chart/style/index.css'
import { initRequestInterceptors } from 'dz-bi-chart'

function getToken() {
  return 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiIyNzk3IiwiZXhwIjoxNjg0MjM2NzkwfQ.NxqHwgj5D0-xhpLicf0uGXauoZG6ZivHZcDyc7qFPbDQMrsrreayhwFuyf3l-NGKRTbxYRan8ibJGcwEqlaqug'
}

function getCompanyId() {
  return 704
}

initRequestInterceptors(config => {
  config.headers.Authorization = `Bearer ${getToken()}`
  config.params = {
    ...config.params,
    COMPANYID: getCompanyId()
  }
  return config
})

createApp(App).mount('#app')
