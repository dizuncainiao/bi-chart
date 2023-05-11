import BasicPie from './basic-pie/chartOptions'
import { cloneDeep } from 'lodash-es'

const allEchartsOptions = {
  BasicPie
}

export type ChartType = keyof typeof allEchartsOptions

export function getChartOption(type: ChartType) {
  return cloneDeep(Reflect.get(allEchartsOptions, type))
}

export default allEchartsOptions
