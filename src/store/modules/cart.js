const state = {
  cart: [],
};

const getters = {
  cart(state) {
    return state.cart;
  }
};

const mutations = {
  addToCart(state, book) {
    state.cart.push(book);
  }
};

const actions = {
  addToCart({ commit }, book) {
    commit("addToCart", book);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
