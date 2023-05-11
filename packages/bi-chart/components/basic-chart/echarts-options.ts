import BasicPie from './basic-pie/chartOptions'
import { cloneDeep } from 'lodash-es'
import { Ref, ref } from 'vue'

const allEchartsOptions = {
  BasicPie
}

export type AllChartOptions = typeof allEchartsOptions

export type ChartType = keyof AllChartOptions

export function getChartOption(type: ChartType) {
  const option = cloneDeep(Reflect.get(allEchartsOptions, type))
  return ref(option)
}

export default allEchartsOptions
