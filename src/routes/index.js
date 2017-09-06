import Vue from 'vue'
import Router from 'vue-router'
// import Env from '@root/vui/setting/env'

Vue.use(Router)

// route-level code splitting
import tplLayout from './tplLayout'
// import tplZt from './tplZT'
import Home from '@/views/Home'
import Component from '@/views/Component'
import Api from '@/views/API'
import demoRoutes from './demo'

const isProd = process.env.NODE_ENV === 'prod'

export function createRouter () {
  return new Router({
    debug: !isProd,
    mode: isProd ? 'history' : 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/',
        component: tplLayout,
        children: [
          { path: '/', component: Home },
        ],
      },
      {
        path: '/app',
        component: () => import('./tplApp'),
        children: [
          { path: '/', component: Component, alias: 'component' },
          { path: '/api', component: Api },
        ],
      },
      {
        path: '/demo',
        component: () => import('./tplDemo'),
        children: [
          { path: '/', component: () => import('@/views/List') },
          ...demoRoutes,
        ],
      },
      // { path: '/', redirect: '/home' },
    ],
  })
}
