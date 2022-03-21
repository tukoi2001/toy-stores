const state = () => ({
    itemsWishlist: [],
  });
  
  const mutations = {
    initItems(state) {
      const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems"));
      if (wishlistItems && wishlistItems.length) {
        state.itemsWishlist = wishlistItems;
      }
    },
    addItem(state, newItem) {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token && token !== null) {
        const findItem = state.itemsWishlist.find((item) => item.id === newItem.id);
        if (findItem) {
          alert('Sản phẩm này đã được thêm vào danh sách yêu thích rồi!');
        } else {
          state.itemsWishlist.push({ ...newItem, qty: 1 });
        }
        localStorage.setItem("wishlistItems", JSON.stringify(state.itemsWishlist));
      }
      else {
          alert('Bạn cần đăng nhập để sử dụng chức năng này!');
      }
    },
    deleteItem(state, id) {
      const findItemIndex = state.itemsWishlist.findIndex((item) => item.id === id);
      if (findItemIndex > -1) {
        state.itemsWishlist.splice(findItemIndex, 1);
      }
      localStorage.setItem("wishlistItems", JSON.stringify(state.itemsWishlist));
    },
    removeAllItemsWishlist(state) {
      localStorage.setItem("wishlistItems", "");
      state.itemsWishlist = [];
    },
  };
  
  const actions = {
    actionInitItemsWishlist({ commit }) {
      commit("initItems");
    },
    actionAddItemWishlist({ commit }, item) {
      commit("addItem", item);
    },
    actionDeleteItem({ commit }, id) {
      commit("deleteItem", id);
    },
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
  };
  