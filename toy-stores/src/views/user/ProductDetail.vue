<template>
  <div> 
    <user-layout>
        <bread-crumbs :title="`Product Details / ${prodName}`"/>
        <main-product-detail/>
        <brands/>
    </user-layout>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BreadCrumbs from '../../components/common/BreadCrumbs.vue';
import Brands from '../../components/home/brands/Brands.vue';
import UserLayout from '../../components/layout/UserLayout.vue';
import MainProductDetail from '../../components/product/MainProductDetail.vue';
export default {
  components: { UserLayout, BreadCrumbs, Brands, MainProductDetail },
  name: "ProductDetail",
  data() {
      return {
          prodName: ''
      }
  },
  created() {
    const product = JSON.parse(localStorage.getItem("productDetail"));
    if (product != '') {
      this.actionSetProductDetail(product);
    }
  },
  computed: {
    ...mapState('products', ['productDetail'])
  },
  methods: {
    ...mapActions('products', ['actionSetProductDetail'])
  },
  mounted() {
      this.prodName = this.productDetail.name;
  }
};
</script>

<style scoped>
.breadcrumb-box {
  margin-bottom: 50px;
}
</style>