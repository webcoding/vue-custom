import Vue from 'vue'
import Router from 'vue-router'
// import Env from '$root/src/setting/env'

Vue.use(Router)

// route-level code splitting
import Layout from './Layout'
// import Zt from './ZT'
import Demo from './Demo'
import Index from '@/views/Index'
import navList from '@/navList'
console.log(navList)
import packages from '$root/packages'
import { camelize, capitalize } from '$root/shared/util'
console.log(capitalize)

const List = () => System.import('@/views/List')
// const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))

const registerRoute = (config) => {
  const routes = []
  config.map(nav =>
    nav.list.map((page) => {
      const path = capitalize(camelize(page.link))
      console.log(path)
      // const path = 'Badge'
      const isPackage = packages.indexOf(path) > -1
      // eslint-disable-line global-require
      if (page.status !== 'todo') {
        // console.log(page.link)
        routes.push({
          path: `${page.link}`,
          component: isPackage ? require(`$root/packages/${path}/demo/Basic`) : require(`@/views/${path}`),
          name: `demo/${page.link}`,
          meta: {
            title: `${page.title} ${page.small}`,
            desc: page.desc,
          },
        })
      }
      return false
    })
  )

  return routes
}

const demoRoutes = registerRoute(navList)

const isProd = process.env.NODE_ENV === 'prod'

export function createRouter () {
  return new Router({
    debug: !isProd,
    mode: isProd ? 'history' : 'hash',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/',
        component: Layout,
        children: [
          { path: '/', component: Index, alias: 'home' },
        ],
      },
      {
        path: '/demo',
        component: Demo,
        children: [
          { path: '/', component: List },
          ...demoRoutes,
        ],
      },
      // { path: '/', redirect: '/home' }
    ],
  })
}
