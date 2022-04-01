import { NotifyService } from "../../services/NotifyService";
const state = () => ({
    notifies: []
  });
  
  const mutations = {
    setNotifications(state, data) {
      state.notifies = data;
    },
  };
  
  const actions = {
    async actionSetNotifications({ commit }) {
      const response = await NotifyService.show();
      const newRes = response.docs.map((item) => {
        const createdDate = new Date(
          item.data().createdAt.seconds * 1000 +
            item.data().createdAt.nanoseconds / 1000000
        );
        const date = (createdDate.getHours() + ':' + createdDate.getMinutes() + ':' + createdDate.getSeconds() + "  " + createdDate.getUTCDate()) + "/" + (createdDate.getMonth() + 1)+ "/" + (createdDate.getUTCFullYear()) ;
        return {
          id: item.id,
          created_At: date,
          ...item.data(),
        };
      });
      commit("setNotifications", newRes);
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };