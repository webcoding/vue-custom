// https://github.com/vuejs/vuex/blob/dev/examples/counter

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  add(state) {
    state.count++
  },
  minus(state) {
    state.count--
  },
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  add: ({ commit }) => commit('add'),
  minus: ({ commit }) => commit('minus'),
  addIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('add')
    }
  },
  addAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('add')
        resolve()
      }, 1000)
    })
  },
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
