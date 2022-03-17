const state = () => ({
  items: [],
  order: null
});

const getters = {
  totalPrice: (state) => {
    let totalPrice = 0;
    state.items.forEach((item) => {
      const price =
        (item.price - (item.price / 100) * item.sale_off) * item.qty;
      totalPrice += price;
    });
    return totalPrice;
  },
};

const mutations = {
  initItems(state) {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems && cartItems.length) {
      state.items = cartItems;
    }
  },
  addItem(state, newItem) {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token && token !== null) {
      const findItem = state.items.find((item) => item.id === newItem.id);
      if (findItem) {
        findItem.qty = parseInt(findItem.qty);
        findItem.qty += 1;
      } else {
        state.items.push({ ...newItem, qty: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    }
    else {
        alert('Bạn cần đăng nhập để sử dụng chức năng này!');
    }
  },
  deleteItem(state, id) {
    const findItemIndex = state.items.findIndex((item) => item.id === id);
    if (findItemIndex > -1) {
      state.items.splice(findItemIndex, 1);
    }
    localStorage.setItem("cartItems", JSON.stringify(state.items));
  },
  removeAllItems(state) {
    localStorage.setItem("cartItems", "");
    state.items = [];
  },
  setOrder(state, data) {
    state.order = data;
  },
};

const actions = {
  actionInitItems({ commit }) {
    commit("initItems");
  },
  actionAddItem({ commit }, item) {
    commit("addItem", item);
  },
  actionDeleteItem({ commit }, id) {
    commit("deleteItem", id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
