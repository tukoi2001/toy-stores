import Vue from 'vue'
import Vuex from 'vuex'
import verifyEmail from './modules/verifyEmail';
import GetSetData from '../utils/GetSetData';
import users from "./modules/users";
import categories from "./modules/categories";
import products from "./modules/products";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      GetSetData.setLocalStorageData('token', token);
    }
  },
  actions: {
    async actionSetToken({commit}, token) {
      commit('setToken', await token);
    }
  },
  modules: {
    verifyEmail,
    users,
    categories,
    products
  }
})
