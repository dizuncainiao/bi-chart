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
      data: [120, 200, 150, 80, 70, 110, 130],
      ...horizontalBarStyle
    }
  ],
  grid: horizontalGrid
}
