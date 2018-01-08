import Vue from 'vue'
import Vuex from 'vuex'
import candy from './candy'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    candy
  },
  plugins: [createPersistedState()]
})

export default store
