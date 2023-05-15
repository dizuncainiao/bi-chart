import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bi-chart/style/index.css'
import { initRequestInterceptors } from 'bi-chart'

function getToken() {
  return 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiIyNzk3IiwiZXhwIjoxNjg0MTUwMzk4fQ.DUBftrV44tYq6YNg5plVGTpOVAdfCU8CGGqEnCP_5-VHSJD-f1M1aOZRXIsh1zZG_i6xhxG9cmeCG_DLS3hvRw'
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
