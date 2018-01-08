const state = {
  candys: []
}

const getters = {
  'candys': state => {
    return state.candys
  }
}

const mutations = {
  'insertCandy': (state, candy) => {
    state.candys.push(candy)
  }
}

const actions = {
  'addCandy': ({commit, state}, candy) => {
    commit('insertCandy', candy)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
