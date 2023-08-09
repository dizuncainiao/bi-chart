import {
  categoryXAxis,
  colors,
  tooltip,
  valueYAxis,
  verticalBarStyle,
  verticalGrid
} from './basic'

export default {
  color: colors,
  tooltip: tooltip,
  xAxis: categoryXAxis,
  yAxis: valueYAxis,
  series: [
    {
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: [320, 302, 301, 334, 390, 330, 320],
      ...verticalBarStyle
    },
    {
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210],
      ...verticalBarStyle
    }
  ],
  grid: verticalGrid
}
