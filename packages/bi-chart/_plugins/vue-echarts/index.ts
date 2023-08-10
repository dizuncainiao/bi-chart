import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
import { registerMap } from 'echarts'
import { LineChart, BarChart, PieChart, FunnelChart, MapChart } from 'echarts/charts'
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  GeoComponent,
  MarkLineComponent,
} from 'echarts/components'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import ChinaJson from './china-json'

registerMap('China', ChinaJson as any)

use([
  ToolboxComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  BarChart,
  PieChart,
  CanvasRenderer,
  MarkLineComponent,
  LabelLayout,
  FunnelChart,
  GeoComponent,
  MapChart
])

// 文档参考：https://github.com/ecomfe/vue-echarts/blob/main/README.zh-Hans.md
export default ECharts
