import { colorToolTipLegend, labelEmphasis } from './basic'

export default {
  ...colorToolTipLegend,
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['60', '90'],
      minAngle: 20,
      center: ['30%', '52.5%'],
      avoidLabelOverlap: false,
      // adjust the start angle
      startAngle: 180,
      ...labelEmphasis,
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
        {
          // make an record to fill the bottom 50%
          value: 1048 + 735 + 580 + 484 + 300,
          itemStyle: {
            // stop the chart from rendering this piece
            color: 'none',
            decal: {
              symbol: 'none'
            }
          },
          label: {
            show: false
          }
        }
      ]
    }
  ]
}
