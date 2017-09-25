import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import user from './modules/user'
// import products from './modules/products'
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // 在非生产环境下，使用严格模式
  strict: debug,
  state: {},
  // actions,
  // getters,
  modules: {
    user,
  },
})
