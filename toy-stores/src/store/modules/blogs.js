const state = () => ({
    blog: {},
  });
  
  const mutations = {
    setBlogDetail(state, data) {
      state.blog = data;
    },
  };
  
  const actions = {
    actionSetBlogDetail({ commit }, data) {
      commit("setBlogDetail", data);
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };