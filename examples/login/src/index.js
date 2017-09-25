import Vue from 'vue'
import App from './App'
import store from './store'
import routes from './routes'

new Vue({
  el: '#app',
  store, // inject store to all children
  router: routes, // 这里命名 的 key 必须是 router

  render: (h) => h(App),
})
