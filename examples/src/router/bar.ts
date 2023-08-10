export default [
  {
    path: '/basic-bar-demo',
    name: 'BasicBarDemo',
    component: () => import('@/views/basic/bar/BasicBarDemo.vue')
  },
  {
    path: '/basic-bar-vertical-demo',
    name: 'BasicBarVerticalDemo',
    component: () => import('@/views/basic/bar/BasicBarVerticalDemo.vue')
  },
  {
    path: '/basic-bar-stack-demo',
    name: 'BasicBarStackDemo',
    component: () => import('@/views/basic/bar/BasicBarStackDemo.vue')
  },
  {
    path: '/basic-bar-stack-vertical-demo',
    name: 'BasicBarStackVerticalDemo',
    component: () => import('@/views/basic/bar/BasicBarStackVerticalDemo.vue')
  }
]
