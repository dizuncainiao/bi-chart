import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bi-chart/style/index.css'
import { initRequestInterceptors } from 'bi-chart'

function getToken() {
  return 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiI2NzA5OCIsImV4cCI6MTY4Mzg4MjU2NX0.TWj-A1OMmN2gtvg3jk-Lj96APqIrqxPbxdqi74N5gIpwsk69nQGDJDV3i2Nb5obhqSyIxAu6b2S3sXi4V0uKnw'
}

initRequestInterceptors(config => {
  config.headers.Authorization = `Bearer ${getToken()}`
  return config
})

createApp(App).mount('#app')
