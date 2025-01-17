import BlankLayout from '@/layouts/BlankLayout.vue';

const admins = [
  {
    path: '/welcome',
    name: 'welcome',
    meta: { title: '欢迎', icon: 'icon-icon-test' },
    component: () => import('@/views/Page1.vue'),
  },
  {
    path: '/admins',
    name: 'admins',
    meta: { title: '管理页', icon: 'icon-tuijian', flat: true },
    component: BlankLayout,
    redirect: () => ({ name: 'page1' }),
    children: [
      {
        path: 'page-1',
        name: 'page1',
        meta: { title: '一级页面', icon: 'icon-tuijian' },
        component: () => import('@/views/admins/PageInfo.vue'),
      },
      {
        path: 'page-2',
        name: 'page2',
        meta: { title: '二级页面', icon: 'icon-tuijian' },
        component: () => import('@/views/admins/PageTypography.vue'),
      },
      {
        path: 'dynamic-match/:id(\\d+)',
        name: 'dynamic-match',
        // 路由 path 默认参数再 meta.params 里
        meta: { title: '动态参数页面', params: { id: 1 } },
        component: () => import('@/views/admins/DynamicMatch.vue'),
      },
    ],
  },
  {
    path: '/version',
    name: 'version',
    meta: { title: 'Version', icon: 'icon-antdesign' },
    component: () => import('@/views/Detail.vue'),
  },
];

export default admins;
