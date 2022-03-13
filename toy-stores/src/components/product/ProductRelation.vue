<template>
  <div class="row">
    <h3>Các sản phẩm liên quan:</h3>
    <div class="col-md-3" v-for="(item, index) in listProducts" :key="index">
      <div class="prod__relation">
        <div class="prod__relation-img">
          <a href="" @click.prevent="getProductDetail(item)">
            <img :src="item.urlImage[0]" alt="" />
          </a>
          <div class="new" v-if="item.isNew === 'True'">
              <span>New</span>
          </div>
        </div>
        <div class="prod__relation-content">
            <a href="" @click.prevent="getProductDetail(item)">{{ item.name }}</a>
            <div class="price-block d-flex align-items-center justify-content-center">
               <span class="price">{{
                formatPrice(item.price - (item.price / 100) * item.sale_off)
              }}</span>
              <span class="price-old" v-if="item.sale_off">{{
                formatPrice(item.price)
              }}</span>
              <span class="price-discounts">{{ item.sale_off }}%</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ProductService } from "../../services/ProductService";
import { mapState, mapActions } from "vuex";
export default {
  name: "ProductRelation",
  data() {
    return {
      listProducts: [],
    };
  },
  computed: {
    ...mapState("products", ["productDetail"]),
  },
  methods: {
      ...mapActions('products', ['actionSetProductDetail']),
      formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    async getDataProduct() {
      const res = await ProductService.show();
      const newRes = res.docs.map((item, index) => {
        return {
          id: item.id,
          index: index,
          ...item.data(),
        };
      });
      const productRelation = newRes.filter(
        (item) => item.category === this.productDetail.category
      );
      const index = productRelation.filter((item) => item.id !== this.productDetail.id) 
      this.listProducts = index;
    },
    getProductDetail(product) {
        this.actionSetProductDetail(product);
        const url = product.slug + product.id;
        this.$router.push(`/products/${url}`);
        this.getDataProduct();
    }
  },
  mounted() {
    this.getDataProduct();
  },
};
</script>

<style scoped>
.prod__relation {
    margin-top: 20px;
    padding: 10px;
}
.prod__relation-img {
    height: 265px;
    overflow: hidden;
    margin: 10px;
    position: relative;
}
.prod__relation-img img {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
}
.new {
    position: absolute;
    top: 15px;
    left: auto;
    right: 15px;
    bottom: auto;
    background: #33c633;
    padding: 5px 10px;
    border-radius: 5px;
}
.new span {
    font-size: 13px;
    color: #fff;
}
.prod__relation-content a {
    text-align: center;
    padding: 0;
    display: block;
    text-transform: capitalize;
    overflow: hidden;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 18px;
    margin-top: 15px;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease-in-out;
}   
.prod__relation-content a:hover {
    color: #00c4cc;
}
.price-block {
    margin-top: 13px;
    text-align: left;
}
.price {
    font-size: 18px;
    color: #00c4cc;
    font-weight: 600;
}
.price-old {
    color: #999999;
    text-decoration: line-through;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
}
.price-discounts {
    color: #fff;
    font-weight: 700;
    text-align: center;
    line-height: 24px;
    padding: 0 7px;
    min-width: 46px;
    background: #bd0018;
    text-transform: uppercase;
    font-size: 14px;
    margin-left: 10px;
    z-index: 3;
    border-radius: 3px;
}
</style>
