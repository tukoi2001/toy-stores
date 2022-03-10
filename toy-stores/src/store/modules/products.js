const state = () => ({
    productDetail: null,
  });
  
  const mutations = {
    setProductDetail(state, data) {
      state.productDetail = data;
    },
  };
  
  const actions = {
    actionSetProductDetail({ commit }, data) {
      commit("setProductDetail", data);
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };