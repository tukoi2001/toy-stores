<template>
  <div>
    <div
      class="row pb-4"
      v-for="(item, index) in listProductsShow"
      :key="index"
    >
      <div class="col-md-3 p-0">
        <div class="card-image">
          <a href="" @click.prevent="getProductDetail(item)"
            ><img :src="item.urlImage[0]" alt=""
          /></a>
          <div class="product_new" v-if="item.isNew === 'True'">
            <span>New</span>
          </div>
        </div>
      </div>
      <div class="col-md-9 text-start">
        <div class="product-list-content">
          <div class="product-card--body">
            <div class="product-header">
              <h3>
                <a href="" @click.prevent="getProductDetail(item)">{{
                  item.name
                }}</a>
              </h3>
              <p>
                {{ item.description }}
              </p>
            </div>
            <div class="price-block">
              <span class="price">{{
                formatPrice(item.price - (item.price / 100) * item.sale_off)
              }}</span>
              <span class="price-old" v-if="item.sale_off">{{
                formatPrice(item.price)
              }}</span>
              <span class="price-discount">{{ item.sale_off }}%</span>
            </div>
            <div class="rating-block">
              <span><b-icon icon="star-fill"></b-icon></span>
              <span><b-icon icon="star-fill"></b-icon></span>
              <span><b-icon icon="star-fill"></b-icon></span>
              <span><b-icon icon="star-fill"></b-icon></span>
              <span><b-icon icon="star"></b-icon></span>
            </div>
            <div class="btn-block">
              <a
                href=""
                class="btn btn-outlined"
                @click.prevent="actionAddItem(item)"
                >Add To Cart</a
              >
              <a href="" class="card-link"
                @click.prevent="actionAddItemWishlist(item)"
                ><b-icon icon="heart-fill"></b-icon> Add To Wishlist</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "ListProduct",
  data() {
    return {
      listProductsShow: [],
    };
  },
  props: {
    listProducts: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    getProductDetail(product) {
      this.actionSetProductDetail(product);
      const id = product.slug + product.id;
      this.$router.push(`/products/${id}`);
    },
    ...mapActions("products", ["actionSetProductDetail"]),
    ...mapActions('cart', ['actionAddItem']),
    ...mapActions("wishlist", ["actionAddItemWishlist"]),
  },
  mounted() {
    this.listProductsShow = this.listProducts;
  },
  watch: {
    listProducts() {
      this.listProductsShow = this.listProducts;
    },
  },
};
</script>

<style scoped src="@/assets/css/components/product/MainProduct.css"></style>
