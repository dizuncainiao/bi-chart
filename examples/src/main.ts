import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bi-chart/style/index.css'
import { initRequestInterceptors } from 'bi-chart'

function getToken() {
  return 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiI2NzA5OCIsImV4cCI6MTY4Mzc5ODU5MH0.azt8JcpjhLMZHNBDrXAoVyVFyNIZts08mdaY37m6tsaU0QaVG0HSk8ihOFsbRw_18XPVn7P24SMJmA4B66SAGQ'
}

initRequestInterceptors(config => {
  config.headers.Authorization = `Bearer ${getToken()}`
  return config
})

createApp(App).mount('#app')
