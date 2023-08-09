// X 轴展示类目
export const categoryXAxis = {
  type: 'category',
  boundaryGap: false,
  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  axisLabel: {
    interval: 0, // 横轴信息显示全部
    color: '#9CA6B9',
    fontSize: 14
  },
  axisLine: {
    lineStyle: {
      type: 'dashed',
      color: '#E1E4E8'
    }
  }
}

// Y 轴展示值
export const valueYAxis = {
  type: 'value',
  splitLine: {
    show: true,
    lineStyle: {
      type: 'dashed',
      color: '#E1E4E8'
    }
  },
  axisLabel: {
    color: '#9CA6B9',
    fontSize: 14
  }
}

// 图例
export const legend = {
  icon: 'circle',
  itemWidth: 8,
  itemHeight: 8,
  itemGap: 25, // 图例每项之间的间隔
  textStyle: {
    fontSize: 12, //字体大小
    color: '#646B7A' //字体颜色
  }
}

// 折线图 grid 样式
export const grid = {
  left: '3%',
  right: '4%',
  bottom: '0%',
  containLabel: true
}

// 通用颜色
export const colors = [
  '#0056FF',
  '#2ED4A9',
  '#FF7125',
  '#FFC420',
  '#F12525',
  '#646B7A'
]
