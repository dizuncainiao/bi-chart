export default {
  color: ['#FFC420', '#646b7a', '#2ED4A9', '#FF7125', '#0056FF'],
  tooltip: {
    show: true,
    trigger: 'item',
    formatter: '{b} : {c}条',
    textStyle: {
      fontFamily: 'Montserrat-Regular, Montserrat'
    }
  },
  series: [
    {
      type: 'funnel',
      top: 100,
      left: '25%',
      width: '55%',
      min: 0,
      max: 100,
      minSize: '20%', // 漏斗最小值的宽度
      maxSize: '80%', // 漏斗最大值的宽度
      sort: 'descending', // 漏斗数据降序排列， ascending 升序
      gap: 2,
      label: {
        show: true, // 显示漏斗每部分名称
        position: 'left',
        fontSize: 14,
        color: '#646B7A'
      },
      labelLine: {
        normal: {
          show: false, // 是否显示引导线
          length: 50 // 视觉引导线长度。
        }
      },
      tooltip: {
        show: false // 让系列一(漏斗图外层图形的提示框不显示)
      },
      data: [
        { value: 60, name: 'Visit' },
        { value: 40, name: 'Inquiry' },
        { value: 20, name: 'Order' },
        { value: 80, name: 'Click' },
        { value: 100, name: 'Show' }
      ]
    }
  ]
}
