import Vue from 'vue'
import Vuex from 'vuex'
import product from './product'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    product
  },
  plugins: [createPersistedState()]
})

export default store
