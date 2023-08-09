export default [
  {
    path: '/basic-line-demo',
    name: 'BasicLineDemo',
    component: () => import('@/views/basic/line/BasicLineDemo.vue')
  },
  {
    path: '/basic-line-area-demo',
    name: 'BasicLineAreaDemo',
    component: () => import('@/views/basic/line/BasicLineAreaDemo.vue')
  },
  {
    path: '/basic-line-stack-demo',
    name: 'BasicLineStackDemo',
    component: () => import('@/views/basic/line/BasicLineStackDemo.vue')
  },
  {
    path: '/basic-line-stack-demo',
    name: 'BasicLineAreaStackDemo',
    component: () => import('@/views/basic/line/BasicLineAreaStackDemo.vue')
  }
]
