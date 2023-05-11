import BasicPie from './basic-pie/BasicPie.vue'
import { computed } from 'vue'
import { ChartType } from './echarts-options'
import { DefineComponent } from 'vue'

// export type ChartComps = Record<ChartType, DefineComponent>

// 图表组件集合
export function useChartComps() {
  return computed(() => ({
    BasicPie
  }))
}
