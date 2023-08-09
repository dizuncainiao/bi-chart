import { colorToolTipLegend, labelEmphasis } from './basic'

export default {
  ...colorToolTipLegend,
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: ['60', '90'],
      minAngle: 20,
      center: ['30%', '52.5%'],
      avoidLabelOverlap: false,
      roseType: 'area',
      ...labelEmphasis,
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 26, name: 'rose 6' },
        { value: 22, name: 'rose 7' },
        { value: 18, name: 'rose 8' }
      ]
    }
  ]
}