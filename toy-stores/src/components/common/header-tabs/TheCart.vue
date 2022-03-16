<template>
  <div>
    <div class="cart-offcanvas-wrapper">
      <div class="offcanvas-overlay" @click.stop="hideShowCart"></div>
      <div class="cart-offcanvas-inner">
        <h4 class="cart-title">
          Giỏ hàng <b-icon class="cart-icon" icon="cart-check-fill"></b-icon>
        </h4>
        <div class="offcanvas-btn-close">
          <a @click.prevent="hideShowCart" href=""
            ><b-icon class="icon" icon="x"></b-icon
          ></a>
        </div>

        <div class="no-item" v-if="items.length === 0">
          <h2>Bạn chưa thêm bất kì sản phẩm nào vào giỏ hàng!</h2>
        </div>

        <div class="offcanvas-cart-content" v-else>
          <div
            class="cart-product-wrapper mb-4 pb-4 border-bottom"
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="single-cart-product">
              <div class="cart-product-thumb">
                <img :src="item.urlImage[0]" :alt="item.slug" />
              </div>
              <div class="cart-product-content">
                <h3 class="title">{{ item.name }}</h3>
                <div class="product-quty-price">
                  <span class="cart-quantity"
                    >{{ item.qty }} <strong> × </strong></span
                  >
                  <span class="price">
                    <span class="new">{{
                      formatPrice(
                        item.price - (item.price / 100) * item.sale_off
                      )
                    }}</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="cart-product-remove">
              <a href="" @click.prevent="actionDeleteItem(item.id)"
                ><b-icon icon="x"></b-icon
              ></a>
            </div>
          </div>

          <div class="cart-product-total mb-4 pb-4 border-bottom">
            <span class="value">Total</span>
            <span class="price">{{ formatPrice(totalPrice) }}</span>
          </div>
          <div class="cart-product-btn mt-4">
            <router-link
              to="/cart"
              class="btn btn-light btn-hover-primary w-100"
              ><b-icon icon="cart"></b-icon> View cart</router-link
            >
            <a
              href=""
              @click.prevent="checkout"
              class="btn btn-light btn-hover-primary w-100 mt-4"
              ><b-icon icon="arrow-return-right"></b-icon> Checkout</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "TheCart",
  computed: {
    ...mapState("cart", ["items"]),
    ...mapState("checkout", ["itemsCheckout"]),
    ...mapGetters("cart", ["totalPrice"]),
  },
  methods: {
    ...mapActions("cart", ["actionInitItems", "actionDeleteItem"]),
    ...mapMutations("checkout", ["initItems"]),
    hideShowCart() {
      this.$emit("myEvent");
    },
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    checkout() {
      const data = {
        items: [this.items],
        total: this.totalPrice + 35000,
        note: "",
        totalPrice: this.totalPrice
      };
      this.initItems(data);
      this.$router.push("/checkout");
    },
  },
  mounted() {
    this.actionInitItems();
  },
};
</script>

<style scoped src="@/assets/css/components/common/TheCart.css"></style>
