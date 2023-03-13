import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import apiStore from './modules/api-store'

Vue.use(Vuex)

const modules = {
  counter,
  apiStore
}

const store = new Vuex.Store({
  modules
})

export default store 