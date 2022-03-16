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
            <a href="" @click.prevent="getProductDetail(item)"><img :src="item.urlImage[0]" alt="" /></a>
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
            <div class="product_new" v-if="item.isNew === 'True'">
              <span>New</span>
            </div>
          </div>
          <div class="product-header mt-3">
            <h3>
              <a href="" @click.prevent="getProductDetail(item)">{{ item.name }}</a>
            </h3>
          </div>
          <div
            class="price-block d-flex align-items-center justify-content-center"
          >
            <span class="price me-2">{{
              formatPrice(item.price - (item.price / 100) * item.sale_off)
            }}</span>
            <span class="price-old me-2" v-if="item.sale_off">{{
              formatPrice(item.price)
            }}</span>
            <span class="price-discount" v-if="item.sale_off > 0"
              >{{ item.sale_off }}%</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="d-flex justify-content-center mt-3"
      v-if="listProductsShow.length >= 6"
    >
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item" v-for="item in total" :key="item">
            <a class="page-link" href="" @click.prevent="getDataByNumber(item * 6 - 6, item * 6  -1)">{{ item }}</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "GridProduct",
  data() {
    return {
      listProductsShow: [],
      total: null,
      // listProductsFiltered: [],
    };
  },
  props: {
    listProducts: {
      type: Array,
      default: () => [],
    },
  },
  computed: {

  },
  created() {
    this.listProductsShow = this.listProducts;
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
    // getDataByNumber(prev, next) {
    //   if (this.listProductsShow.length > 6) {
    //     const data = [];
    //     this.listProducts.forEach((product) => {
    //       if (product.index >= prev && product.index <= next) {
    //         data.push(product);
    //       }
    //     });
    //     this.listProductsFiltered = data;
    //     console.log(data);
    //   }
    //   else {
    //     this.listProductsFiltered = this.listProductsShow;
    //   }
    // },
      ...mapActions('products', [
        'actionSetProductDetail'
      ]),
      ...mapActions('cart', ['actionAddItem'])
  },
  mounted() {
    // setTimeout(() => {{ 
    //   const num = this.listProductsShow.length;
    //   this.total = Math.ceil(num / 6);
    //   this.getDataByNumber(0, 5);
    // }}, 2000 )
  },
  watch: {
    listProducts() {
      this.listProductsShow = this.listProducts;
    },
  },
};
</script>

<style scoped src="@/assets/css/components/product/MainProduct.css"></style>
