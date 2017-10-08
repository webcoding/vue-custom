
function lazyLoad(page) {
  return () => import(/* webpackChunkName: "master" */ `./${page}`)
}

export const router = [
  {
    path: '/master',
    component: lazyLoad('_tpl'),
    children: [
      {
        path: '/',
        name: 'master',
        // alias: '/index',
        meta: {
          title: '支付宝首页',
        },
        component: lazyLoad('index'),
      },
      {
        path: '/page',
        // name: 'page',
        meta: {
          title: '主站页面',
        },
        component: lazyLoad('page'),
      },
      {
        path: '/zt',
        // name: 'zt',
        meta: {
          title: '主站专题',
        },
        component: lazyLoad('zt'),
      },
      // { path: '/*', name: 'index', redirect: { name: 'index' }},
    ],
  },
]
