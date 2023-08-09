import { BnIconSetting } from 'blocks-next'
import Bar from './bar.ts'
import Line from './line.ts'
import Pie from './pie.ts'
import Funnel from './funnel.ts'
import Map from './map.ts'

export const menuData = [
  {
    groupName: '基础布局',
    showGroup: true,
    children: [
      {
        icon: BnIconSetting,
        title: '小报表布局',
        routeName: 'BasicSmallLayoutDemo',
        showItem: true
      }
    ]
  },
  {
    groupName: '基础图表',
    showGroup: true,
    children: [...Bar, ...Line, ...Pie, ...Funnel, ...Map]
  },
  {
    groupName: '业务图表',
    showGroup: true,
    children: [
      {
        icon: BnIconSetting,
        title: '外呼次数排行榜',
        routeName: 'ThingsOutboundNumberRankingDemo',
        showItem: true
      }
    ]
  }
]
