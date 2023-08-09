import {
  categoryYAxis,
  colors,
  horizontalBarStyle,
  horizontalGrid,
  barTooltip,
  valueXAxis
} from './basic'

export default {
  color: colors,
  tooltip: barTooltip,
  xAxis: valueXAxis,
  yAxis: categoryYAxis,
  series: [
    {
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: [320, 302, 301, 334, 390, 330, 320],
      ...horizontalBarStyle
    },
    {
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: [120, 132, 101, 134, 90, 230, 210],
      ...horizontalBarStyle
    }
  ],
  grid: horizontalGrid
}
