<template>
  <div class="box__content">
    <div class="row order__detail">
      <button type="button" class="btn btn-primary" @click="hideDetails">
        <b-icon icon="x"></b-icon>
      </button>
      <h2 class="main__title text-start">Chi tiết đơn hàng</h2>
      <div class="col-6 text-start">
        <h4 class="cate-detail-title">Thông tin của khách hàng:</h4>
        <p>Họ và tên khách hàng: {{ order.fullName }}</p>
        <p>Email: {{ order.email }}</p>
        <p>Số điện thoại: {{ order.phoneNumber }}</p>
        <p>Địa chỉ: {{ order.address }}</p>
        <p>Địa chỉ cụ thể: {{ order.addressSpecific }}</p>
        <p>Tổng tiền đơn hàng: {{ formatPrice(order.totalPrice) }}</p>
        <p>Phương thức thanh toán: {{ order.pay_method }}</p>
        <p>Tình trạng thanh toán: {{ order.paymentStatus }}</p>
        <p>Tình trạng đơn hàng: {{ order.status }}</p>
        <p>Ghi chú của khách hàng: {{ order.note }}</p>
        <p>Thông báo cho khách hàng: {{ order.notifications }}</p>
        <p>Ngày tạo: {{ order.createdAt }}</p>
      </div>
      <div class="col-6 order__img">
        <h4 class="cate-detail-title text-start mb-5">
          Tất cả sản phẩm của đơn hàng:
        </h4>
        <div class="row prod_item" v-for="(item, index) in items" :key="index">
          <div class="col-md-3">
            <img :src="item.urlImage[0]" alt="" />
          </div>
          <div class="col-md-9 text-start mt-3">
            <p>Tên sản phẩm: {{ item.name }}</p>
            <p>Số lượng: {{ item.qty }}</p>
            <p>
              Thành tiền:
              {{ formatPrice(item.price - (item.price / 100) * item.sale_off) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "OrderUserDetail",
  data() {
    return {
      items: [],
    };
  },
  computed: {
    ...mapState("cart", ["order"]),
  },
  methods: {
    backTo() {
      this.$router.push("/dashboard/orders");
    },
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    hideDetails() {
      this.$emit("myEvent");
    },
  },
  mounted() {
    this.items = this.order.items;
  },
};
</script>

<style scoped>
.box__content {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  overflow-y: scroll;
}
.btn-primary {
  position: absolute;
  top: 10px;
  left: auto;
  right: 10px;
  bottom: auto;
  display: block;
  width: 63px;
  height: 60px;
  color: #fff;
  font-size: 2rem;
  font-weight: bold;
}
.order__detail {
  margin: 50px 150px;
  padding: 0 30px;
  background-color: #f5f5f5;
  border-radius: 10px;
  position: relative;
}
.main__title {
  font-weight: bold;
  font-size: 2rem;
  padding: 20px 0;
  color: #62ab00;
  text-shadow: 2px 1px 1px #000;
}
.order__img img {
  width: 100%;
  height: 85%;
  display: block;
  border-radius: 10px;
  margin-top: 10px;
}
p {
  font-size: 1rem;
  font-weight: 600;
}
.prod_item {
  margin: 10px 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
