import Vue from 'vue'
import Vuex from 'vuex'
import verifyEmail from './modules/verifyEmail';
import GetSetData from '../utils/GetSetData';
import users from "./modules/users";
import categories from "./modules/categories";
import products from "./modules/products";
import cart from "./modules/cart";
import checkout from "./modules/checkout";
import wishlist from "./modules/wishlist";
import blogs from "./modules/blogs";
import notify from "./modules/notify"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    role: "",
    isLoading: false
  },
  getters: {
    getRole(state){
      return state.role;
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      GetSetData.setLocalStorageData('token', token);
    },
    setRole(state, role) {
      state.role = role;
    },
    loading(state) {
      state.isLoading = true;
      setTimeout(() => {
        state.isLoading = false;
      }, 1500)
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
    products,
    cart,
    wishlist,
    checkout,
    blogs,
    notify
  }
})
