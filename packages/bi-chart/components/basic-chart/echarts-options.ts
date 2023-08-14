import { cloneDeep } from 'lodash-es'
import { ref } from 'vue'
import * as allEchartsOptions from './chart-option'

export type AllChartOptions = typeof allEchartsOptions

export type ChartType = keyof AllChartOptions

// 清空图表的默认数据
export function wipeOptionData(options: any) {
  const option = cloneDeep(options)
  if (Array.isArray(option.series)) {
    // 保留一条 series（防止预设的配置被缓存了 legend 等数据）
    option.series = option.series.slice(0, 1)
    option.series.forEach((item: any) => {
      item.data = []
      item.name = ''
    })
  } else if (
    Object.prototype.toString.call(option.series) === '[object Object]'
  ) {
    option.series.data = []
    option.series.name = ''
  }
  return option
}

export function getChartOption(type: ChartType) {
  const option = wipeOptionData(Reflect.get(allEchartsOptions, type))
  return ref(option)
}

export default allEchartsOptions
