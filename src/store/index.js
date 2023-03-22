import Vue from 'vue'
import Vuex from 'vuex'
import book from './modules/book'
import counter from './modules/counter'
import apiStore from './modules/api-store'

Vue.use(Vuex)

const modules = {
  book,
  counter,
  apiStore
}

const store = new Vuex.Store({
  modules
})

export default store
