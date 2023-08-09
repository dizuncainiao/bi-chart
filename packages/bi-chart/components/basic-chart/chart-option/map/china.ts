
export default {
  color: [
    '#0056FF',
    '#2ED4A9',
    '#242934',
    '#FF7125',
    '#FFC420',
    '#F12525',
    '#646B7A',
    '#0056FF',
    '#2ED4A9',
    '#242934'
  ],
  tooltip: {
    trigger: 'item'
  },
  legend: {
    type: 'scroll',
    orient: 'vertical',
    align: 'left',
    x: '65%',
    y: 'center',
    itemGap: 25,
    icon: 'circle',
    textStyle: {
      color: 'rgba(156, 166, 185, 1)',
      fontSize: '14px',
      padding: [0, 0, 0, 5]
    },
    itemWidth: 6
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      center: ['30%', '52.5%'],
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '16',
          fontWeight: 'bold',
          color: '#646B7A'
        }
      },
      labelLine: {
        show: false
      },
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