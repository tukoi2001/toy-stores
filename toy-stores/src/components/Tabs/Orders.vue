<template>
  <div>
    <h3 class="title">Đơn hàng</h3>
    <p style="font-size: 1rem; color: #000; font-weight: 600">Các đơn hàng đã mua:</p>
    <div class="myaccount-table table-responsive text-center">
      <table class="table table-bordered">
        <thead class="thead-light">
          <th>ID:</th>
          <th>Ngày đặt</th>
          <th>Tình trạng thanh toán</th>
          <th>Phương thức thanh toán thanh toán</th>
          <th>Tình trạng đơn hàng</th>
          <th>Tổng cộng</th>
          <th>Ghi chú</th>
          <th>Hành động</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in orders" :key="index">
            <td>{{ item.index }}</td>
            <td>{{ item.createdAt }}</td>
            <td>{{ item.paymentStatus }}</td>
            <td>{{ item.pay_method }}</td>
            <td>{{ item.status }}</td>
            <td>{{ formatPrice(item.totalPrice) }}</td>
             <td>{{ item.notifications }}</td>
            <td>
              <a
                @click.prevent="detailOrders(item)"
                href=""
                class="btn btn btn-dark btn-hover-primary btn-sm rounded-0"
                >View</a
              >
            </td>
          </tr>
          <tr v-if="orders.length <= 0">
            <td colspan="5" class="fw-bold text-danger">
              There is no item in there!
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <order-user-detail v-if="showDetails" @myEvent="hideDetails"/>
  </div>
</template>

<script>
import { CartService } from "../../services/CartService";
import { mapState, mapMutations } from 'vuex'
import OrderUserDetail from './OrderUserDetail.vue';
export default {
  components: { OrderUserDetail },
  name: "Orders",
  data() {
    return {
      orders: [],
      showDetails: false
    };
  },
  computed: {
    ...mapState('users', ['userInformation'])
  },
  methods: {
    ...mapMutations("cart", ["setOrder"]),
    async innitData() {
      const response = await CartService.show();
      const newRes = response.docs.map((item, index) => {
        const createdDate = new Date(
          item.data().createdAt.seconds * 1000 +
            item.data().createdAt.nanoseconds / 1000000
        );
        const updatedDate = new Date(
          item.data().createdAt.seconds * 1000 +
            item.data().createdAt.nanoseconds / 1000000
        );
        return {
          id: item.id,
          index,
          ...item.data(),
          createdAt: createdDate,
          updatedAt: updatedDate,
        };
      });
      const userID = this.userInformation.multiFactor.user.uid;
      this.orders = newRes.filter(item => item.uid === userID);
    },
    detailOrders(data) {
      this.setOrder(data);
      this.showDetails = true;
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
      this.showDetails = false;
    }
  },
  mounted() {
    this.innitData();
  },
};
</script>

<style scoped src="@/assets/css/components/user/tabs/tabs.css"></style>
