export default [
  {
    path: '/basic-pie-demo',
    name: 'BasicPieDemo',
    component: () => import('@/views/basic/pie/BasicPieDemo.vue')
  },
  {
    path: '/basic-roll-pie-demo',
    name: 'BasicRollPieDemo',
    component: () => import('@/views/basic/pie/BasicRollPieDemo.vue')
  },
  {
    path: '/basic-half-roll-pie-demo',
    name: 'BasicHalfRollPieDemo',
    component: () => import('@/views/basic/pie/BasicHalfRollPieDemo.vue')
  },
  {
    path: '/basic-multiple-pie-demo',
    name: 'BasicMultiplePieDemo',
    component: () => import('@/views/basic/pie/BasicMultiplePieDemo.vue')
  },
  {
    path: '/basic-rose-pie-demo',
    name: 'BasicRosePieDemo',
    component: () => import('@/views/basic/pie/BasicRosePieDemo.vue')
  }
]
  