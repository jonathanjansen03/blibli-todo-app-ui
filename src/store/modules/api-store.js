import testAPI from '@/api/test-api'

const state = {
  getText: '',
  postText: '',
  texts: []
}

const mutations = {
  setGetText(state, data) {
    state.getText = data
  },
  setPostText(state, data) {
    state.postText = data
  },
  setTexts(state, data) {
    state.texts = data
  }
}

const actions = {
  getTextData: ({ commit }, { query }) => {
    return testAPI.getDataByAPI(query)
      .then(res => {
        commit('setGetText', res.body.data.text)
        return res
      })
  },
  postTextData: async ({ commit }, data) => {
    await testAPI.postDataViaAPI(data)
      .then(res  => {
        commit('setPostText', res.body.data.text)
        commit('setTexts', res.body.data.list)
        return res
      })
  }
}

const getters = {
  text (state) {
    return state.getText
  },
  postText (state) {
    return state.postText
  },
  texts (state) {
    return state.texts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
