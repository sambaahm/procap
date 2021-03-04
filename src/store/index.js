import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null
  },
    mutations: {
        setToken(state, token) {
            state.token = token
        }
  },
    actions: {
        setToken({ commit }, token) {
            commit('setToken', token)
        }
  },
  modules: {
  }
})
