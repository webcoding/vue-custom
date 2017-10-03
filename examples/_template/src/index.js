import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

new Vue({
  el: '#app',
  router,
  store, // inject store to all children

  render: (h) => h(App),
})
