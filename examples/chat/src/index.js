import Vue from 'vue'
import App from './components/App'
import store from './store'
// import routes from './routes'
import { getAllMessages } from './store/actions'

Vue.config.debug = true

Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleTimeString()
})

new Vue({
  el: '#app',
  store, // inject store to all children
  // router: routes, // 这里命名 的 key 必须是 router

  render: (h) => h(App),
})

getAllMessages(store)
