import { ProductService } from '../../services/ProductService';
const state = () => ({
    productDetail: null,
    listProducts: null,
  });
  
  const mutations = {
    setProductDetail(state, data) {
      state.productDetail = data;
    },
    setDataProduct(state, prod) {
      state.listProducts = prod;
    },
  };
  
  const actions = {
    actionSetProductDetail({ commit }, data) {
      commit("setProductDetail", data);
    },
    async actionSetDataProduct({ commit }) {
      const response = await ProductService.show();
      const newRes = response.docs.map((item) => {
        return {
          id: item.id,
          ...item.data(),
        };
      });
      commit("setDataProduct", newRes);
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };