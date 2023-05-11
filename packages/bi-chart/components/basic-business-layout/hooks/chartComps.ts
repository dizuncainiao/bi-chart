import BasicPie from '../../basic-chart/basic-pie/BasicPie.vue'
import { computed } from 'vue'

// 图表组件集合
export function useChartComps() {
  return computed(() => ({
    BasicPie
  }))
}
