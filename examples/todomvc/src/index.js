import Vue from 'vue'
import App from './components/App'
import store from './store'

new Vue({
  store, // inject store to all children
  // router: routes, // 这里命名 的 key 必须是 router

  el: '#app',
  // template: '<App/>',
  // components: { App },

  render: (h) => h(App),
})
