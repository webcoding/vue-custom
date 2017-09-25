import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

import index from '../views/index.vue'
import login from '../views/login.vue'

// 懒加载 依赖syntax-dynamic-import插件解析语法
// import 内注释可以控制 chunks, returns a Promise
function lazyLoad(page) {
  return () => import(/* webpackChunkName: "group" */ `../views/${page}`)
}

Vue.use(Router)

const router = new Router({
  // 使用 history 模式（默认 hash）
  mode: 'hash',
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
