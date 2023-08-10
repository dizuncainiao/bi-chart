// X 轴展示值
export const valueXAxis = {
  type: 'value',
  splitLine: {
    show: true,
    lineStyle: {
      type: 'dashed'
    }
  },
  axisLine: {
    lineStyle: {
      color: '#9CA6B9'
    }
  }
}

// X 轴展示类目
export const categoryXAxis = {
  type: 'category',
  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  splitLine: {
    show: true,
    lineStyle: {
      type: 'dashed'
    }
  },
  axisLine: {
    lineStyle: {
      color: '#9CA6B9'
    }
  }
}

// Y 轴展示值
export const valueYAxis = {
  type: 'value',
  nameTextStyle: {
    color: '#9CA6B9'
  },
  axisTick: {
    alignWithLabel: true,
    show: false
  },
  axisLine: {
    lineStyle: {
      color: '#9CA6B9',
      type: 'dashed'
    }
  }
}

// Y 轴展示类目
export const categoryYAxis = {
  type: 'category',
  nameTextStyle: {
    color: '#9CA6B9'
  },
  axisTick: {
    alignWithLabel: true,
    show: false
  },
  axisLine: {
    lineStyle: {
      color: '#9CA6B9',
      type: 'dashed'
    }
  },
  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
}

// 横向柱状图 bar 样式
export const horizontalBarStyle = {
  barMaxWidth: '80',
  type: 'bar',
  itemStyle: {
    opacity: 0.8,
    borderWidth: 2
  },
  barMinHeight: 5,
  label: {
    show: true,
    position: 'right',
    valueAnimation: true,
    formatter: '{c}次'
  }
}

// 纵向柱状图 bar 样式
export const verticalBarStyle = {
  barMaxWidth: '35',
  type: 'bar',
  itemStyle: {
    opacity: 0.8,
    borderWidth: 2
  },
  barMinHeight: 5,
  label: {
    show: true,
    position: 'top',
    valueAnimation: true,
    formatter: '{c}次'
  }
}

// 横向柱状图 grid 样式
export const horizontalGrid = {
  top: '5%',
  left: '3%',
  right: '11%',
  bottom: '3%',
  containLabel: true
}

// 纵向柱状图 grid 样式
export const verticalGrid = {
  top: '5%',
  left: '3%',
  right: '5%',
  bottom: '3%',
  containLabel: true
}

// 通用颜色
export const colors = [
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
]

// 通用柱状图 tooltip
export const barTooltip = {
  trigger: 'axis',
  axisPointer: {
    // Use axis to trigger tooltip
    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
  }
}
