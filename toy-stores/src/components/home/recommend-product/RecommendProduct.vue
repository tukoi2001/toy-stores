<template>
  <div class="container">
      <div class="row">
          <div class="col-12 text-start">
              <h2 class="mt-10 mb-4 fw-bold recommend_title">Các sản phẩm được đề xuất</h2>
              <p class="recommend_des">Các sản phẩm được cập nhật liên tục giúp khách hàng dễ dàng lựa chọn!</p>
          </div>
      </div>
      <div class="row">
          <div class="col-md-12">
              <recommend-product-item :listProducts="listProductsShow"/>
          </div>
          <button class="btn btn-primary" @click="showProducts" v-if="isFull">Show more</button>
          <button class="btn btn-primary" @click="hideProducts" v-else>Show less</button>
      </div>
  </div>
</template>

<script>
import { ProductService } from "../../../services/ProductService";
import RecommendProductItem from './RecommendProductItem.vue';
export default {
  components: { RecommendProductItem },
    name: 'RecommendProduct',
    data() {
        return {
            listProductsShow: [],
            full: false,
            isFull: true
        }
    },
    methods: {
    async getDataProduct() {
      const res = await ProductService.show();
      const newRes = res.docs.map((item, index) => {
        return {
          id: item.id,
          index: index,
          ...item.data(),
        };
      });
      if (this.full === false) {
          this.listProductsShow = newRes.filter((item) => item.index <= 11);
      }
      else {
          this.listProductsShow = newRes;
      }
    },
    showProducts() {
        this.full = true;
        this.getDataProduct();
        setTimeout( () => {
          this.isFull = false;
        }, 1000)
    },
    hideProducts() {
        this.full = false;
        this.getDataProduct();
        setTimeout( () => {
          this.isFull = true;
        }, 1000)
    }
  },
  async mounted() {
    this.getDataProduct();
  },
}
</script>

<style scoped>
.recommend_title {
    font-size: 30px;
    margin-bottom: 0;
    color: #222222;
}
.recommend_des {
    font-size: 1.1rem;
}
button.btn.btn-primary {
    display: block;
    width: 150px;
    height: 50px;
    margin: 10px auto;
    font-weight: 600;
    font-size: 1.1rem;
    background-color: #00c4cc;
    border-color: #00c4cc;
    transition: all 0.3s ease-in-out;
}
button.btn.btn-primary:hover {
    background-color: #FFF;
    color: #00c4cc;
}
button.btn.btn-primary:focus {
  box-shadow: none;
}
</style>