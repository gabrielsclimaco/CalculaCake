const state = {
  products: []
}

const getters = {
  'products': state => {
    return state.products
  }
}

const mutations = {
  'insertProduct': (state, product) => {
    state.products.push(product)
  }
}

const actions = {
  'addProduct': ({commit, state}, product) => {
    commit('insertProduct', product)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
