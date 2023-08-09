// 通用饼图 tooltip
export const pieTooltip = {
  trigger: 'item',
  className: 'tooltip-layer-wrapper',
  formatter: `
      <div class="tooltip-layer-box">
        <div class="title">{b}</div>
        <div class="num">数量：{c}</div>
        <div class="proportion">占比：{d}%</div>
      </div>
    `
}

export const colorToolTipLegend = {
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
  tooltip: pieTooltip,
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
  }
}

export const labelEmphasis = {
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
  }
}
