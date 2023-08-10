export default {
  color: ['#FFC420', '#646b7a', '#2ED4A9', '#FF7125', '#0056FF'],
  title: {
    text: '尖漏斗',
    top: '28px',
    left: '28px',
    textStyle: {
      color: '#242934',
      fontSize: 16,
      fontFamily: 'PingFangSC-Semibold, "PingFang SC"'
    }
  },
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
      minSize: '0%', // 漏斗最小值的宽度
      maxSize: '100%', // 漏斗最大值的宽度
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
      data: [
        { value: 50, name: 'Visit' },
        { value: 70, name: 'Inquiry' },
        { value: 80, name: 'Order' },
        { value: 90, name: 'Click' },
        { value: 100, name: 'Show' }
      ]
    }
  ]
}
  