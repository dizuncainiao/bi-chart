import ECharts from 'vue-echarts'
import {use, registerMap} from 'echarts/core'
import {LineChart, BarChart, PieChart} from 'echarts/charts'
import {
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    MarkLineComponent
} from 'echarts/components'
import {LabelLayout} from 'echarts/features'
import {CanvasRenderer} from 'echarts/renderers'
import ChinaJson from './china-json'

registerMap('china', ChinaJson as any)

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
    LabelLayout
])

// 文档参考：https://github.com/ecomfe/vue-echarts/blob/main/README.zh-Hans.md
export default ECharts
