
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
        alias: '/index',
        name: 'alipay',
        meta: {
          title: '支付宝首页',
        },
        component: lazyLoad('index'),
      },
      {
        path: 'page',
        name: 'alipay-page',
        meta: {
          title: '支付宝页面',
        },
        component: lazyLoad('page'),
      },
      {
        path: 'zt',
        meta: {
          title: '支付宝专题',
        },
        component: lazyLoad('zt'),
      },
      { path: '*', redirect: { name: 'alipay' }},
    ],
  },
]
