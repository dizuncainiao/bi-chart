import {
  categoryXAxis,
  colors,
  barTooltip,
  valueYAxis,
  verticalBarStyle,
  verticalGrid
} from './basic'

export default {
  color: colors,
  tooltip: barTooltip,
  xAxis: categoryXAxis,
  yAxis: valueYAxis,
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      ...verticalBarStyle
    },
    {
      data: [220, 100, 250, 180, 270, 220, 160],
      ...verticalBarStyle
    }
  ],
  grid: verticalGrid
}
