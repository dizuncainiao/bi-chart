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
      data: [
        { value: 70, name: 'rose 1' },
        { value: 90, name: 'rose 2' },
      ]
    }
  ]
}