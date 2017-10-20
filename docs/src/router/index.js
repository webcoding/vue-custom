/**
 * 使用 webpack 的 require.context 实现路由“去中心化”管理
 *
 * 语法: require.context(directory, useSubdirectories, regExp)
   require.context 有三个参数：
     - directory：说明需要检索的目录
     - useSubdirectories：是否检索子目录
     - regExp: 匹配文件的正则表达式
 */

import Vue from 'vue'
import Router from 'vue-router'
// import store from './store/'
// import configDocs from './config/docs'

// import viewRoutes from '../views/route.js'
// import docsRoutes from '../views/docs/route.js'
// import demoRoutes from '../views/demo/route.js'

Vue.use(Router)

// const routes = [
//   viewRoutes,
//   docsRoutes,
//   demoRoutes,
// ]

// 路由去中心化设计
// https://webpack.js.org/guides/dependency-management/#require-context
// 目前处理 export default 不好，特殊处理
// var cache = {}

// function importAll (r) {
//   /* eslint no-return-assign: 0 */
//   return r.keys().forEach(key => cache[key] = r(key))
// }
// importAll(require.context('../components/', true, /\.js$/))
// // At build-time cache will be populated with all required modules.

const routes = (r => {
  // console.log(r.keys())
  return r.keys().map(key => r(key).default)
})(require.context('../views', true, /^\.(\/([\s\S])+)?\/route\.js$/))

// 处理特殊路由
routes.push({
  path: '*',
  redirect: '/',
  // redirect: {
  //   name: 'index',
  // },
})
console.log(routes)

const router = new Router({
  mode: 'hash',
  base: '',
  scrollBehavior: () => ({ y: 0 }),
  routes,
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
