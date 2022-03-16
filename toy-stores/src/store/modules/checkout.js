const state = () => ({
    itemsCheckout: null
})

const getters = {
    
}

const mutations = {
    initItems(state, data) {
        state.itemsCheckout = data;
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