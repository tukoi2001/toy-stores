<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 text-start mb-5">
          <h3 class="wishlist-title">Các sản phẩm yêu thích</h3>
          <p class="wishlist-des">Tất cả sản phẩm yêu thích của bạn!</p>
        </div>
        <div class="col-12">
          <div class="wishlist-table table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th class="pro-thumbnail">Hình ảnh</th>
                  <th class="pro-title">Tên sản phẩm</th>
                  <th class="pro-price">Đơn giá</th>
                  <th class="pro-stock">Tình trạng</th>
                  <th class="pro-cart">Thêm vào giỏ</th>
                  <th class="pro-remove">Xóa</th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="itemsWishlist.length <= 0">
                  <td colspan="6">
                    <p class="no-item">
                      Chưa có sản phẩm nào được thêm vào danh sách yêu thích!
                      Vui lòng thêm sản phẩm! Cảm ơn!
                    </p>
                  </td>
                </tr>
                <tr v-else v-for="(item, index) in itemsWishlist" :key="index">
                  <td class="pro-thumbnail">
                    <a href="" @click.prevent="getProductDetail(item)"
                      ><img
                        class="fit-image"
                        :src="item.urlImage[0]"
                        :alt="item.slug"
                    /></a>
                  </td>
                  <td class="pro-title">
                    <a href="" @click.prevent="getProductDetail(item)">{{ item.name }}</a>
                  </td>
                  <td class="pro-price">
                    <span>{{
                      formatPrice(
                        item.price - (item.price / 100) * item.sale_off
                      )
                    }}</span>
                  </td>
                  <td class="pro-stock"><span>Còn hàng</span></td>
                  <td class="pro-cart">
                    <a href="" 
                        @click.prevent="actionAddItem(item)"
                        class="btn btn-primary btn-hover-secondary"
                      >Thêm vào giỏ</a
                    >
                  </td>
                  <td class="pro-remove">
                    <a href="" @click.prevent="actionDeleteItem(item.id)"
                      ><b-icon icon="trash-fill"></b-icon
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="wishlist-button-section">
            <a
              v-if="itemsWishlist.length > 1"
              href=""
              @click.prevent="removeAllItem"
              class="btn btn-primary"
              >Xóa tất cả</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "MainWishlist",
  computed: {
    ...mapState("wishlist", ["itemsWishlist"]),
  },
  methods: {
    ...mapMutations("wishlist", ["removeAllItemsWishlist"]),
    ...mapActions("wishlist", ["actionInitItemsWishlist", "actionDeleteItem"]), 
    ...mapActions('cart', ['actionAddItem']),
    ...mapActions("products", ["actionSetProductDetail"]),
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    removeAllItem() {
      this.removeAllItemsWishlist();
      this.actionInitItemsWishlist();
    },
    getProductDetail(product) {
      this.actionSetProductDetail(product);
      const id = product.slug + product.id;
      this.$router.push(`/products/${id}`);
    }
  },
};
</script>

<style scoped src="@/assets/css/components/wishlist/Wishlist.css"></style>
