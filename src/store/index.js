import Vue from 'vue'
import Vuex from 'vuex'
import apiStore from './modules/api-store'
import book from './modules/book'
import cart from './modules/cart'
import counter from './modules/counter'
import transaction from './modules/transaction'

Vue.use(Vuex)

const modules = {
  apiStore,
  book,
  cart,
  counter,
  transaction
}

const store = new Vuex.Store({
  modules
})

export default store
