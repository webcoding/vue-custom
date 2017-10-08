import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store/'


import index from '../views/index'
import { router as viewRouter } from '../views/config'
import { router as masterRouter } from '../views/master/config'
import { router as alipayRouter } from '../views/alipay/config'
// import page from '../views/page'
// import zt from '../views/zt'
// import err404 from '../components/404'

Vue.use(Router)

const routes = [
  ...viewRouter,
  ...masterRouter,
  ...alipayRouter,
]

const router = new Router({
  mode: 'history',
  base: '',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    ...routes,
    { path: '/*', name: '404', redirect: { name: 'index' }},  // 默认跳转到首页
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
  const { requiresAuth = false, title = '' } = meta


  // if (to.matched.some(record => record.meta.requiresAuth)) {
  if (requiresAuth && !auth.loggedIn() && path !== loginPath) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return next({
      path: loginPath,
      query: { redirect: to.fullPath },
    })
  }
  // 更新 TDK
  document.title = title
  // hack: 在微信等webview中无法修改document.title的情况
  // let $iframe = $('<iframe src="/isLive.action" style="display:none;"></iframe>');
  // $iframe.on('load',function() {
  //   setTimeout(function() {
  //     $iframe.off('load').remove();
  //   }, 0);
  // }).appendTo($body);

  // 确保一定要调用 next()
  return next()
})

export default router
