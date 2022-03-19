import { MeService } from "../../services/MeService";
const state = () => ({
  userInformation: null,
  dataUserLogin: null,
});

const mutations = {
  updateUser(state, payload) {
    state.userInformation = payload;
  },
  setInfoUser(state, doc) {
    let user = {
      email: doc.data().email,
      name: doc.data().name,
      role: doc.data().role,
    };
    state.dataUserLogin = user;
  },
};

const actions = {
  async getCurrentUser({ commit }, userId) {
    const response = await MeService.me(userId);
    commit("setInfoUser", response);
    localStorage.setItem("uid", JSON.stringify(userId));
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
