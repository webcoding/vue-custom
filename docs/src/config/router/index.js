import Vue from 'vue'
import Router from 'vue-router'
// import store from './store/'
// import configDocs from '../config/docs'

// import index from '../views/index'
// import viewRouter from '../views/route'

import docsRouter from '../views/docs/route'
import demoRouter from '../views/demo/route'

// import masterRouter from '../views/master/route'
// import alipayRouter from '../views/alipay/route'

Vue.use(Router)

// routes
// const routes = (r => {
//   return r.keys().map(key => r(key))
// })(require.context('./', true, /^\.\/modules\/((?!\/)[\s\S])+\/route\.js$/))


// console.log(demoRouter[0].children)

const routes = [
  // ...viewRouter,
  ...docsRouter,
  ...demoRouter,
  // ...demo,
  // ...masterRouter,
  // ...alipayRouter,
  // {
  //   path: '/',
  //   redirect: '/docs/quickstart',
  // },
  // { path: '/*', name: '404', redirect: { name: 'index' }},  // 默认跳转到首页
  // { path: '*', redirect: '/' },
]

const router = new Router({
  mode: 'hash',
  base: '',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', redirect: { name: 'quickstart' }},
    ...routes,
  ],
})

// window.docsRouter = router

router.beforeEach((to, from, next) => {
  const { title, desc } = to.meta
  if (title) {
    document.title = title
  }
  if (desc) {
    // ...
  }
  next()
})

// const auth = {
//   loggedIn() {
//     // return Boolean(store.state.user.id)
//   },
// }

// const loginPath = '/login'
// // let indexScrollTop = 0
// // 权限检测
// router.beforeEach((to, from, next) => {
//   const { meta, path } = to
//   const { requiresAuth = false, title = '' } = meta
//   console.log(meta, path)

//   // if (to.matched.some(record => record.meta.requiresAuth)) {
//   if (requiresAuth && !auth.loggedIn() && path !== loginPath) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     return next({
//       path: loginPath,
//       query: { redirect: to.fullPath },
//     })
//   }
//   // 更新 TDK
//   if (title) {
//     document.title = title
//   }
//   // hack: 在微信等webview中无法修改document.title的情况
//   // let $iframe = $('<iframe src="/isLive.action" style="display:none;"></iframe>');
//   // $iframe.on('load',function() {
//   //   setTimeout(function() {
//   //     $iframe.off('load').remove();
//   //   }, 0);
//   // }).appendTo($body);

//   // 确保一定要调用 next()
//   return next()
// })

export default router
