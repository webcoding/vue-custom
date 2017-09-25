import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'


import index from '../views/index'
import login from '../views/login'

// 懒加载 依赖syntax-dynamic-import插件解析语法
// import 内注释可以控制 chunks, returns a Promise
function lazyLoad(page) {
  return () => import(/* webpackChunkName: "group" */ `../views/${page}`)
}

Vue.use(Router)
console.log(222)

const router = new Router({
  // 使用 history 模式（默认 hash）
  mode: 'history',
  // base: '',
  // 记住页面的滚动位置，仅 history 模式适用(浏览器返回，系统会自动记住处理)
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/login', name: 'login', component: login },
    { path: '/index', name: 'index', component: index },
    {
      path: '/profile',
      name: 'profile',
      meta: { requiresAuth: true },
      component: lazyLoad('profile'),
    },
    {
      path: '/about',
      name: 'about',
      component: lazyLoad('about'),
    },
    { path: '/*', name: 'default', component: index },
  ],
})

const auth = {
  loggedIn() {
    return Boolean(store.state.user.id)
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


/**
 *
 * { path: '/' },
    // params are denoted with a colon ":"
    { path: '/params/:foo/:bar' },
    // a param can be made optional by adding "?"
    { path: '/optional-params/:foo?' },
    // a param can be followed by a regex pattern in parens
    // this route will only be matched if :id is all numbers
    { path: '/params-with-regex/:id(\\d+)' },
    // asterisk can match anything
    { path: '/asterisk/*' },
    // make part of th path optional by wrapping with parens and add "?"
    { path: '/optional-group/(foo/)?bar' }
 */
