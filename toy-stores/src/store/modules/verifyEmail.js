const state = () => ({
    email: null,
})

const mutations = {
   setDataEmail(state, data) {
    state.email = data;
   }
}

const actions = {
   actionSetDataEmail({commit}, data) {
       commit('setDataEmail', data);
   }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}