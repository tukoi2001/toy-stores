const state = () => ({
    itemsCheckout: null,
    status: ''
})

const getters = {
    
}

const mutations = {
    initItems(state, data) {
        state.itemsCheckout = data;
    },
    setStatus(state, data) {
        state.status = data;
    }
}

const actions = {
   
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}