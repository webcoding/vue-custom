import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

Vue.use(Router)

// form表单 post请求的时候需要emulateJSON为true
// Vue.http.options.emulateJSON = true

new Vue({
  el: '#app',

  render: (h) => h(App),
})
