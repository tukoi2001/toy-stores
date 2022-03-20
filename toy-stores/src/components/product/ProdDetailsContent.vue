<template>
  <div class="content__box">
    <div class="text__box">
      <h3 class="text__box-title">
        {{ productDetail.name }}
        <span v-if="productDetail.isNew === 'True'">New</span>
      </h3>
      <p class="text__box-icon">
        <b-icon icon="star-fill"></b-icon>
        <b-icon icon="star-fill"></b-icon>
        <b-icon icon="star-fill"></b-icon>
        <b-icon icon="star-fill"></b-icon>
        <b-icon icon="star-fill"></b-icon>
        <span>(10)</span>
      </p>
      <p>{{ productDetail.description }}</p>
      <p>
        Danh mục sản phẩm: <span>{{ productDetail.category }}</span>
      </p>
      <p>
        Nhà phân phối: <span>Công ty xuất nhập khẩu 1 thành viên Tú Đội</span>
      </p>
      <p>Sản phẩm chuyên cung cấp: <span>Cho trẻ em Việt Nam</span></p>
    </div>
    <div class="status__prod">
      <p>
        Tình trạng:
        <span class="in-stock" v-if="productDetail.quantity > 0"
          >Còn hàng ({{ productDetail.quantity }})</span
        >
        <span class="out-of-stock" v-else>Hết hàng</span>
      </p>
    </div>
    <div class="price-block">
      <span class="price">{{
        formatPrice(productDetail.price - (productDetail.price / 100) * productDetail.sale_off)
      }}</span>
      <span class="price-old" v-if="productDetail.sale_off">{{
        formatPrice(productDetail.price)
      }}</span>
      <span class="price-discounts">{{ productDetail.sale_off }}%</span>
    </div>
    <div class="input">
      <label>Quantities:</label>
      <input
        class="btn-primary"
        type="number"
        min="1"
        max="20"
        v-model="quantity"
      />
    </div>
    <div class="btn__prod">
      <button type="button" @click="actionAddItem(productDetail)" class="btn btn-primary">Add To Cart</button>
      <a href=""
        ><b-icon class="btn__prod-icon" icon="arrow-repeat"></b-icon>Compare</a
      >
      <a href="" @click.prevent="actionAddItemWishlist(productDetail)"
        ><b-icon class="btn__prod-icon" icon="heart"></b-icon>Wishlist</a
      >
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ProdDetailsContent",
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    ...mapState("products", ["productDetail"]),
  },
  methods: {
    ...mapActions('cart', ['actionAddItem']),
    ...mapActions("wishlist", ["actionAddItemWishlist"]),
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
  },
};
</script>

<style scoped>
.content__box {
  padding: 0 20px;
}
.text__box-title {
  color: #00c4cc;
  font-size: 2rem;
  line-height: 1.25;
  letter-spacing: 2px;
  position: relative;
}
.text__box-icon {
  font-size: 1rem !important;
  color: #eccd00 !important;
}
.text__box p,
.status__prod p,
.input label {
  color: #000;
  font-size: 1rem;
}
.text__box p > span {
  font-weight: bold;
  font-size: 1.1rem;
}
.text__box-icon span {
  margin-left: 10px;
  color: #333;
  font-size: 12px !important;
}
.in-stock {
  background-color: rgb(19, 204, 19);
  padding: 5px 15px;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
}
.out-of-stock {
  background-color: red;
  padding: 5px 15px;
  color: #fff;
  font-size: 1rem;
  border-radius: 5px;
}
.text__box-title span {
  background-color: rgb(19, 204, 19);
  color: #fff;
  padding: 5px 15px;
  border-radius: 5px;
  margin-bottom: -10px;
  position: absolute;
}
.input input {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
}
.input input:focus {
  border-color: #00c4cc;
  box-shadow: none;
}
.input {
  margin-bottom: 25px;
}
.btn__prod button {
  display: block;
  margin-bottom: 30px;
  padding: 10px 40px;
  color: #fff;
  background-color: #00c4cc;
  border-color: #00c4cc;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease-in-out;
}
.btn__prod button:hover {
  background-color: #333;
  border-color: #333;
}
.btn__prod a {
  text-decoration: none;
  background-color: #f5f5f5;
  padding: 10px 30px;
  color: #333;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  transition: all 0.3s ease-in-out;
}
.btn__prod a:hover {
  border-color: #00c4cc;
  background-color: #fff;
}
.btn__prod a:last-child {
  margin-left: 20px;
}
.btn__prod-icon {
  margin-right: 10px;
}
.price-block {
    margin: 15px 0;
    text-align: left;
}
.price {
    font-size: 25px;
    color: #00c4cc;
    font-weight: 600;
}
.price-old {
    color: #999999;
    text-decoration: line-through;
    font-size: 23px;
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
    font-size: 17px;
    margin-left: 10px;
    z-index: 3;
    border-radius: 3px;
} 
.btn:focus {
  box-shadow: none;
}
</style>
