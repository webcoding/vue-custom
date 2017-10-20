import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import KitDoc from './doc-tpl/src/install'
// debugger
import vueUI from '../../vui'
Vue.use(KitDoc)
Vue.use(vueUI)

// console.log(require.context('../packages', false, /^\.\/modules\.js$/))
// const packages = (r => {
//   debugger
//   console.log(r)
//   // return r.keys().map(key => r(key).default)
// // })(require.context('../packages', true, /^\.(\/([\s\S])+)+\/index\.js$/))
// })(require.context('../packages', true, /^\.\/modules.js$/))
// debugger
// console.log(packages)

// form表单 post请求的时候需要emulateJSON为true
// Vue.http.options.emulateJSON = true

new Vue({
  el: '#app',
  router,
  store, // inject store to all children

  render: (h) => h(App),
})
