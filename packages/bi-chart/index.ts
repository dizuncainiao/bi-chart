import './_plugins/vue-echarts'
import './style/index.css'
// fixme：blocks-next 按需加载样式无效
import 'blocks-next/theme-default/index.css'

// 业务组件
export { default as OutCallTaskBig } from './components/business/out-call-task-big'
export { default as OutCallNumRankBig } from './components/business/out-call-num-rank-big'
export { default as ThingsOutboundNumberRanking } from './components/business/things-outbound-number-ranking'
export { default as ThingsOutboundConnectionRateRanking } from './components/business/things-outbound-connection-rate-ranking'
export { default as ThingsOutboundConnectionNumberRanking } from './components/business/things-outbound-connection-number-ranking'
export { default as TestFunnelBig } from './components/business/test-funnel-big'
export { default as CrmConversionRateAnalysis } from './components/business/crm-conversion-rate-analysis'
export { default as CrmCustomerStageFunnel } from './components/business/crm-customer-stage-funnel'

// 基础服务组件
export {
  default as BasicBusinessLayout,
  BasicSmallLayout,
  BasicAccountLayout,
  DepSelect,
  DateSelect
} from './components/basic-business'
// 基础图表
export { default as BasicChart } from './components/basic-chart'
// 基础图表配置
export { default as allEchartsOptions } from './components/basic-chart/echarts-options'

// 请求拦截器
export { initRequestInterceptors } from './_plugins/axios-http'
