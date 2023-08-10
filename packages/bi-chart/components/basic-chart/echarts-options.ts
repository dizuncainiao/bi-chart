import { cloneDeep } from 'lodash-es'
import { ref } from 'vue'
import * as allEchartsOptions from './chart-option'

export type AllChartOptions = typeof allEchartsOptions

export type ChartType = keyof AllChartOptions

// 清空图表的默认数据
export function wipeOptionData(options: any) {
  const option = cloneDeep(options)
  if (Array.isArray(option.series)) {
    option.series.forEach((item: any) => {
      item.data = []
    })
  } else if (
    Object.prototype.toString.call(option.series) === '[object Object]'
  ) {
    option.series.data = []
  }
  return option
}

export function getChartOption(type: ChartType) {
  const option = wipeOptionData(Reflect.get(allEchartsOptions, type))
  return ref(option)
}

export default allEchartsOptions
