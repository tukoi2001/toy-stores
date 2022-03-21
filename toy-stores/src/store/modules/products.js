import { ProductService } from '../../services/ProductService';
const state = () => ({
    productDetail: null,
    listProducts: [],
    listImg: [],
    currentImg: null,
    search: '',
  });
  
  const mutations = {
    setProductDetail(state, data) {
      state.productDetail = data;
      state.listImg = data.urlImage;
      state.currentImg = data.urlImage[0];
    },
    setDataProduct(state, prod) {
      state.listProducts = prod;
    },
    setNum(state, num) {
      state.num = num;
    },
    setImageCurrent(state, img) {
      state.currentImg = img;
    },
    setSearchTitle(state, title) {
      state.search = title;
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