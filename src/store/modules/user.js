export default {
  namespaced: true,

  name: 'user',

  state: {
    user: null
  },

  mutations: {
    SET_USER (state, payload) {
      state.user = payload;
    }
  },

  actions: {
    SetUser ({ commit }, payload) {
      commit('SET_USER', payload);
    }
  }
}
