import { BnIconSetting } from 'blocks-next'

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
    children: [
      {
        icon: BnIconSetting,
        title: '条形图',
        routeName: 'BasicBarDemo',
        showItem: true
      }
    ]
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
