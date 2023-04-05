const state = {
  cartItems: []
}

const getters = {
  cartItems(state) {
    return state.cartItems
  }
}

const mutations = {
  addToCart(state, book) {
    const index = state.cartItems.findIndex(item => item.book.id === book.book.id)
    if (index !== -1) {
      state.cartItems[index].qty += book.qty
      return
    }
    state.cartItems.push(book)
  },
  removeFromCart(state, index) {
    state.cartItems.splice(index, 1)
  },
  emptyCart(state) {
    state.cartItems = []
  }
}

const actions = {
  addToCart({ commit }, book) {
    commit('addToCart', book)
  },
  removeFromCart({ commit }, index) {
    commit('removeFromCart', index)
  },
  emptyCart({ commit }) {
    commit('emptyCart')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
