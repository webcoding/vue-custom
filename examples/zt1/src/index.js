// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './utils/init'
import App from './App'
// import store from './store/'
import router from './router'
import * as filters from './filter'

// // register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/**
 * 错误统计 https://docs.sentry.io/clients/javascript/integrations/vue/
 * Vue.config.errorHandler https://cn.vuejs.org/v2/api/#errorHandler
 */
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

const debug = false

if (process.env.NODE_ENV === 'production' || debug) {
  Raven
    .config('https://37695669ab8e4d0688819f320de4a73a@sentry.io/144523')
    .addPlugin(RavenVue, Vue)
    .install()
}


// Vue.config.productionTip = false

/* eslint-disable no-new */
// const app = new Vue(Vue.util.extend({
//   router,
//   store,
// }, App))

// app.$mount('#app')

// 创建并挂载到 #app (会替换 #app)
// 提供的元素只能作为挂载点。所有的挂载元素会被 Vue 生成的 DOM 替换。
// 因此不推荐挂载root实例到 <html> 或者 <body> 上。
// FIXME: 为什么没有替换的效果，这里使用 transition 时有 bug，已处理
new Vue({
  router,
  // store,
  el: '#app',
  render: (h) => h(App),
})
