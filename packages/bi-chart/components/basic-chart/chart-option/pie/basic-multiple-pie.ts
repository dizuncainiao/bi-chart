import { colorToolTipLegend, labelEmphasis } from './basic'

const data = [
  {
    name: 'Apples',
    value: 70
  },
  {
    name: 'Strawberries',
    value: 68
  },
  {
    name: 'Bananas',
    value: 48
  },
  {
    name: 'Oranges',
    value: 40
  },
  {
    name: 'Pears',
    value: 32
  },
  {
    name: 'Pineapples',
    value: 27
  },
  {
    name: 'Grapes',
    value: 18
  }
]

export default {
  ...colorToolTipLegend,
  series: [
    {
      type: 'pie',
      radius: '25%',
      center: ['30%', '24%'],
      data: data,
      ...labelEmphasis,
    },
    {
      type: 'pie',
      radius: '25%',
      center: ['30%', '50%'],
      data: data,
      ...labelEmphasis,
    },
    {
      type: 'pie',
      radius: '25%',
      center: ['30%', '76%'],
      data: data,
      ...labelEmphasis,
    }
  ]
}
