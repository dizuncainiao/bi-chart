import './_plugins/vue-echarts'
import './style/index.css'
import 'element-plus/es/components/select/style/css'

// 业务组件
export { default as OutCallTaskBig } from './components/business/out-call-task-big'
export { default as OutCallNumRankBig } from './components/business/out-call-num-rank-big'
export { default as ThingsOutboundNumberRanking } from './components/business/things-outbound-number-ranking'
export { default as ThingsOutboundConnectionRateRanking } from './components/business/things-outbound-connection-rate-ranking'
export { default as ThingsOutboundConnectionNumberRanking } from './components/business/things-outbound-connection-number-ranking'
// 基础服务组件
export {
  default as BasicBusinessLayout,
  BasicSmallLayout
} from './components/basic-business'

// 请求拦截器
export { initRequestInterceptors } from './_plugins/axios-http'
