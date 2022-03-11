<template>
  <div class="row">
    <div
      class="col-md-4 pb-5"
      v-for="(item, index) in listProductsShow"
      :key="index"
    >
      <div class="product-grid-content product-card--body">
        <div class="product-card--body">
          <div class="card-image">
            <img :src="item.urlImage[0]" alt="" />
            <div class="hover-contents">
              <div class="hover-btns">
                <a
                  href=""
                  class="single-btn"
                  @click.prevent="actionAddItem(item)"
                >
                  <b-icon icon="basket"></b-icon>
                </a>
                <a href="" class="single-btn">
                  <b-icon icon="heart"></b-icon>
                </a>
                <a
                  href=""
                  data-toggle="modal"
                  data-target="#quickModal"
                  class="single-btn"
                >
                  <b-icon icon="eye"></b-icon>
                </a>
              </div>
            </div>
            <div class="product_new" v-if="item.isNew">
              <span>New</span>
            </div>
          </div>
          <div class="product-header mt-3">
            <h3>
              <a href="">{{ item.name }}</a>
            </h3>
          </div>
          <div
            class="price-block d-flex align-items-center justify-content-center"
          >
            <span class="price me-2">{{ formatPrice(item.price - (item.price / 100 * item.sale_off)) }}</span>
            <span
              class="price-old me-2"
              v-if="item.sale_off"
              >{{ formatPrice(item.price) }}</span>
            <span class="price-discount" v-if="item.sale_off > 0"
              >{{ item.sale_off }}%</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapActions} from 'vuex'
export default {
  name: "GridProduct",
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
    //   ...mapActions('cart', [
    //     'actionAddItem'
    //   ])
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
