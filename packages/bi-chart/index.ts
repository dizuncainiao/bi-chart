import './_plugins/vue-echarts'
import './style/index.css'
import 'element-plus/es/components/select/style/css'

// 业务组件
export { default as OutCallTaskBig } from './components/out-call-task-big'
// 基础服务组件
export { default as BasicBusinessLayout } from './components/basic-business-layout'

// 请求拦截器
export { initRequestInterceptors } from './_plugins/axios-http'
