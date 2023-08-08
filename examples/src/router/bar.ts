export default [
  {
    path: '/basic-bar-demo',
    name: 'BasicBarDemo',
    component: () => import('@/views/basic/BasicBarDemo.vue')
  },
  {
    path: '/basic-bar-vertical-demo',
    name: 'BasicBarVerticalDemo',
    component: () => import('@/views/basic/BasicBarVerticalDemo.vue')
  }
]
