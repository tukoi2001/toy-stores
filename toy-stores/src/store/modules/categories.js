import { CategoryService } from '../../services/CategoryService';
const state = () => ({
    category: null,
    listCategories: null
  });
  
  const mutations = {
    setCategory(state, data) {
      state.category = data;
    },
    setDataCategory(state, cate) {
      state.listCategories = cate;
    },
  };
  
  const actions = {
    actionSetCategory({ commit }, data) {
      commit("setCategory", data);
    },
    async actionSetDataCategory({ commit }) {
      const response = await CategoryService.show();
      const newRes = response.docs.map((item) => {
        return {
          id: item.id,
          ...item.data(),
        };
      });
      commit("setDataCategory", newRes);
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };