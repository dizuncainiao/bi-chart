import { createRouter, createWebHashHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'
import bar from '@/router/bar.ts'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/basic-small-layout-demo'
  },
  {
    path: '/basic-small-layout-demo',
    name: 'BasicSmallLayoutDemo',
    component: () => import('@/views/layout/BasicSmallLayoutDemo.vue')
  },
  {
    path: '/things-outbound-number-ranking-demo',
    name: 'ThingsOutboundNumberRankingDemo',
    component: () =>
      import('@/views/business/ThingsOutboundNumberRankingDemo.vue')
  },
  ...bar
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from)
    return savedPosition || { top: 0 }
  }
})
