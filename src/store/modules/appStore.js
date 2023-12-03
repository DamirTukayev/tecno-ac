export default {
  state: {
    cartItems: [],
    triggerBuy: 0
  },
  mutations: {
    setValue (state, keyValue) {
      state[keyValue.key] = keyValue.value
    }
  },
  actions: {
    SET_VALUE ({ commit }, keyValue) {
      commit('setValue', keyValue)
    }
  }
}