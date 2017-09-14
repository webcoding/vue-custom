import Vue from 'vue'
import App from './App'
import store from './store'

new Vue({
  el: '#app',
  store,
  // router: routes, // 这里命名 的 key 必须是 router

  template: '<App/>',
  components: { App },

  // render: (h) => h(App),
})
