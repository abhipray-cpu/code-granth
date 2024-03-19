import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    gender: 'male'
  },
  mutations: {
    setGender(state, payload) {
      state.gender = payload.value
    }
  },
  getters: {
    getGender(state) {
      return state.gender
    }
  },
  actions: {}
})

export default store
