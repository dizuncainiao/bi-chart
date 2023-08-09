import { colorToolTipLegend, labelEmphasis } from './basic'

export default {
  ...colorToolTipLegend,
  series: [
    {
      name: '外呼任务统计',
      type: 'pie',
      radius: ['60', '90'],
      minAngle: 20,
      center: ['30%', '52.5%'],
      avoidLabelOverlap: false,
      ...labelEmphasis,
      data: [
        { name: '今日任务', value: 50 },
        { name: '已完成任务', value: 50 },
        { name: '过期任务', value: 50 }
      ]
    }
  ]
}
