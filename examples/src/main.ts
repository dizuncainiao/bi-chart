import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bi-chart/style/index.css'
import { initRequestInterceptors } from 'bi-chart'

function getToken() {
  return 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiIyNzk3IiwiZXhwIjoxNjg0MjI3MzE5fQ.ScHL-LIz-wGNtgt77kwNsEUPDIowQjozdTUkvz-ne6D0rkR_HiCjYLX9byk08JXFD8WZ3jPFR2q_j2fd1_zE4Q'
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
