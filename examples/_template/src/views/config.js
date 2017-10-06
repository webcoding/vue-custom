

function lazyLoad(page) {
  return () => import(/* webpackChunkName: "default" */ `./${page}`)
}

export const router = [
  {
    path: '/page',
    name: 'page',
    meta: {
      title: '一般页面',
    },
    component: lazyLoad('page'),
  },
  {
    path: '/zt',
    name: 'zt',
    meta: {
      title: '专题页面',
    },
    component: lazyLoad('zt'),
  },
]

