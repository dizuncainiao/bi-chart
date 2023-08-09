import { colorToolTipLegend, labelEmphasis } from './basic'

export default {
  ...colorToolTipLegend,
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      center: ['30%', '52.5%'],
      ...labelEmphasis,
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
}