import { categoryXAxis, colors, grid, legend, valueYAxis } from './basic'

export default {
  colors,
  tooltip: {
    trigger: 'axis'
  },
  legend,
  grid,
  xAxis: categoryXAxis,
  yAxis: valueYAxis,
  series: [
    {
      name: '外呼总时长',
      type: 'line',
      data: [150, 230, 224, 218, 135, 147, 260]
    },
    {
      name: '外呼平均通话时长',
      type: 'line',
      data: [250, 130, 124, 318, 235, 247, 160]
    },
    {
      name: '通时评分',
      type: 'line',
      data: [450, 530, 324, 118, 335, 347, 60]
    }
  ]
}
