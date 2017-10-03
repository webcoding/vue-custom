import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store/'

import index from '../views/index'
import page from '../views/page'
import zt from '../views/zt'
import err404 from '../components/404'
// import score from '../pages/score'
// import profile from '../pages/profile'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', alias: '/index', name: 'index', component: index },
    { path: '/page', name: 'zt', component: page },
    { path: '/zt', name: 'zt', component: zt },
    { path: '/*', name: '404', component: err404 },
    // { path: '/score', name: 'score', component: score },
    // {
    //   path: '/item',
    //   name: 'item',
    //   component: resolve => require(['../pages/item'], resolve),
    //   // component: r => require.ensure([], () => r(require('../page/home')), 'home')
    // },
    // { path: '*', redirect: '/' },
    // {
    //   path: '/',
    //   // component: App,
    //   children: [
    //   ],
    // },
  ],
})

const auth = {
  loggedIn() {
    // return Boolean(store.state.user.id)
  },
}


const loginPath = '/login'
// let indexScrollTop = 0
// 权限检测
router.beforeEach((to, from, next) => {
  const { meta, path } = to
  const { requiresAuth = false } = meta

  // if (to.matched.some(record => record.meta.requiresAuth)) {
  if (requiresAuth && !auth.loggedIn() && path !== loginPath) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return next({
      path: loginPath,
      query: { redirect: to.fullPath },
    })
  }

  // 确保一定要调用 next()
  return next()
})

export default router
