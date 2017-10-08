
function lazyLoad(page) {
  return () => import(/* webpackChunkName: "alipay" */ `./${page}`)
}

export const router = [
  {
    path: '/alipay',
    component: lazyLoad('_tpl'),
    children: [
      {
        path: '/',
        name: 'alipay',
        // alias: '/index',
        meta: {
          title: '支付宝首页',
        },
        component: lazyLoad('index'),
      },
      {
        path: '/page',
        meta: {
          title: '支付宝页面',
        },
        component: lazyLoad('page'),
      },
      {
        path: '/zt',
        meta: {
          title: '支付宝专题',
        },
        component: lazyLoad('zt'),
      },
      // { path: '/*', name: 'index', redirect: { name: 'index' }},
    ],
  },
]
