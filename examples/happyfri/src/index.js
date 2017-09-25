// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import router from './routes'
import App from './App'
import './style/common.css'
import './config/rem'

/**
 * 错误统计 https://docs.sentry.io/clients/javascript/integrations/vue/
 * Vue.config.errorHandler https://cn.vuejs.org/v2/api/#errorHandler
 */
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

if (process.env.NODE_ENV === 'production') {
  Raven
    .config('https://37695669ab8e4d0688819f320de4a73a@sentry.io/144523')
    .addPlugin(RavenVue, Vue)
    .install()
}


// Vue.config.productionTip = false

new Vue({
  router,
  store,
  el: '#app',
  render: (h) => h(App),
})
