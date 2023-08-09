import {
  categoryYAxis,
  colors,
  horizontalBarStyle,
  horizontalGrid,
  tooltip,
  valueXAxis
} from './basic'

export default {
  color: colors,
  tooltip: tooltip,
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
