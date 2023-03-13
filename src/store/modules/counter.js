const state = {
  counter: 0
}

const mutations = {
  setCounter (state, value) {
    state.counter = value
  }
}

const actions = {
  setCounter({ commit }, newCounter) {
    commit('setCounter', newCounter)
  }
}

const getters = {
  getCounter (state) {
    return state.counter
  }
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}