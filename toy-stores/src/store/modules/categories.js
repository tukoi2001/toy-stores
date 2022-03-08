const state = () => ({
    category: null
  });
  
  const mutations = {
    setCategory(state, data) {
      state.category = data;
    },
  };
  
  const actions = {
    actionSetCategory({ commit }, data) {
      commit("setCategory", data);
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };