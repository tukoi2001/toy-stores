<template>
  <div class="container">
    <div class="row mb-n4">
      <div class="text-start">
        <h3 class="checkout__title">Kiểm tra trước khi thanh toán</h3>
        <p class="checkout__des">
          Vui lòng kiểm tra tất cả sản phẩm của bạn hiện có trong giỏ hàng có
          đúng như ở dưới đây sau đó tiến hành đặt hàng và thanh toán. Cảm ơn
          quý khách!
        </p>
      </div>
      <div class="text-center" v-if="itemsCheckout === null">
        <h3 class="no-item">
          Bạn chưa có sản phẩm nào trong giỏ hàng. Vui lòng kiểm tra lại! Cảm
          ơn!
        </h3>
      </div>
      <div class="row" v-else>
        <div class="col-lg-6 col-12 mb-4 text-start">
          <div class="checkbox-form">
            <h3 class="title">Thông tin đặt hàng</h3>
            <form action="" @submit.prevent="">
              <div class="row">
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label for="fullName"
                      >Họ và tên khách hàng:<span class="required"
                        >(*)</span
                      ></label
                    >
                    <input
                      placeholder="Họ và tên khách hàng"
                      type="text"
                      id="fullName"
                      v-model.trim="userForm.fullName"
                      required
                      autocomplete="on"
                      autofocus
                      pattern="([A-Za-z]).{1,}"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label for="phoneNumber"
                      >Số điện thoại:<span class="required">(*)</span></label
                    >
                    <input
                      placeholder="0333333333"
                      type="text"
                      pattern="[0-9]{10}"
                      id="phoneNumber"
                      v-model.trim="userForm.phoneNumber"
                      required
                      autocomplete="on"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label for="email"
                      >Địa chỉ Email:<span class="required">(*)</span></label
                    >
                    <input
                      placeholder="Email"
                      type="email"
                      id="email"
                      v-model.trim="userForm.email"
                      required
                      autocomplete="on"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label for="city"
                      >Tỉnh / Thành Phố<span class="required">(*)</span></label
                    >
                    <input
                      type="text"
                      minLength="3"
                      maxLength="15"
                      placeholder="Tỉnh / Thành Phố"
                      id="city"
                      v-model.trim="userForm.city"
                      required
                      autocomplete="on"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label for="district"
                      >Quận / Huyện <span class="required">(*)</span></label
                    >
                    <input
                      type="text"
                      maxLength="15"
                      pattern="([A-Za-z]).{2,}"
                      placeholder="Quận / Huyện "
                      id="district"
                      v-model.trim="userForm.district"
                      required
                      autocomplete="on"
                    />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label for="ward"
                      >Xã / Phường: <span class="required">(*)</span></label
                    >
                    <input
                      type="text"
                      pattern="([A-Za-z]).{2,}"
                      maxLength="20"
                      placeholder="Xã / Phường "
                      id="ward"
                      v-model.trim="userForm.ward"
                      required
                      autocomplete="on"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label for="street"
                      >Đường: <span class="required">(*)</span></label
                    >
                    <input
                      type="text"
                      pattern=".{2,}"
                      maxLength="30"
                      placeholder="Đường"
                      id="street"
                      v-model.trim="userForm.street"
                      required
                      autocomplete="on"
                    />
                  </div>
                </div>

                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label for="specificAddress">Địa chỉ cụ thể:</label>
                    <input
                      placeholder="Địa chỉ cụ thể"
                      type="text"
                      maxLength="50"
                      pattern=".{2,}"
                      id="specificAddress"
                      title="Vui lòng nhập địa chỉ cụ thể nếu cần!"
                      v-model.trim="userForm.address"
                      autocomplete="on"
                    />
                  </div>
                </div>

                <div class="order-notes mt-3 mb-n2">
                  <div class="checkout-form-list checkout-form-list-2">
                    <label for="checkout-mess">Ghi chú:</label>
                    <textarea
                      id="checkout-mess"
                      cols="30"
                      pattern=".{2,}"
                      maxLength="150"
                      rows="10"
                      title="Vui lòng nhập ghi chú nếu cần!"
                      placeholder="Ghi chú về đơn đặt hàng của bạn, ví dụ: những lưu ý đặc biệt khi giao hàng."
                      v-model.trim="userForm.note"
                      autocomplete="on"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="col-lg-6 col-12 mb-4 text-start">
          <div class="your-order-area border">
            <h3 class="title">Đơn hàng của bạn</h3>
            <div class="your-order-table table-responsive">
              <table class="table">
                <thead>
                  <tr class="cart-product-head">
                    <th class="cart-product-name text-start">Tên sản phẩm</th>
                    <th class="cart-product-total text-end">Tổng cộng</th>
                  </tr>
                </thead>

                <tbody>
                  <tr
                    class="cart_item"
                    v-for="(item, index) in items"
                    :key="index"
                  >
                    <td class="cart-product-name text-start ps-0">
                      {{ item.name
                      }}<strong class="product-quantity">
                        × {{ item.qty }}</strong
                      >
                    </td>
                    <td class="cart-product-total text-end pe-0">
                      <span class="amount"
                        >{{
                          formatPrice(
                            item.qty *
                              (item.price - (item.price / 100) * item.sale_off)
                          )
                        }}
                      </span>
                    </td>
                  </tr>
                </tbody>

                <tfoot>
                  <tr class="cart-subtotal">
                    <th class="text-start ps-0">Tổng giá tất cả sản phẩm</th>
                    <td class="text-end pe-0">
                      <span class="amount">{{
                        formatPrice(itemsCheckout.totalPrice)
                      }}</span>
                    </td>
                  </tr>
                  <tr class="cart-subtotal">
                    <th class="text-start ps-0">Phí giao hàng</th>
                    <td class="text-end pe-0">
                      <span class="amount">+ {{ formatPrice(35000) }}</span>
                    </td>
                  </tr>
                  <tr class="order-total">
                    <th class="text-start ps-0">Tổng cộng</th>
                    <td class="text-end pe-0">
                      <strong
                        ><span class="amount">{{
                          formatPrice(itemsCheckout.total)
                        }}</span></strong
                      >
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div class="payment-accordion-order-button">
              <div class="payment-accordion">
                <div class="single-payment">
                  <h5 class="panel-title mb-3">
                    <a
                      class="collapse-off"
                      href=""
                      @click.prevent="showMethods"
                    >
                      Phương thức thanh toán
                    </a>
                  </h5>
                  <div
                    class="icon__payment"
                    :class="{ active: active === true }"
                  >
                    <b-icon icon="caret-down-fill"></b-icon>
                  </div>
                </div>
                <div class="cod_method" v-if="active">
                  <p @click="showCodMethod">Thanh toán khi nhận hàng (COD)</p>
                  <div
                    class="choose"
                    :class="{
                      active_btn:
                        pay_method === 'Thanh toán khi nhận hàng (COD)',
                    }"
                  >
                    <b-icon icon="check-all"></b-icon>
                  </div>
                </div>
                <div>
                  <div class="paypal_method" v-if="active">
                    <p @click="showPaypalMethod">Paypal</p>
                    <div
                      class="choose"
                      :class="{ active_btn: pay_method === 'Paypal' }"
                    >
                      <b-icon icon="check-all"></b-icon>
                    </div>
                  </div>
                </div>
              </div>
              <paypal v-if="showPaypal" :totalPrice="itemsCheckout.total" />
              <div class="order-button-payment">
                <button
                  v-if="isPending"
                  class="btn btn-primary btn-hover-secondary rounded-0 w-100 dark"
                  @click="checkout"
                >
                  Loading...
                </button>
                <button
                  v-else-if="!isPending && status !== 'COMPLETED'"
                  class="btn btn-primary btn-hover-secondary rounded-0 w-100"
                  @click="checkout"
                >
                  Đặt hàng
                </button>
                <button
                  v-else
                  class="btn btn-primary btn-hover-secondary rounded-0 w-100"
                  @click="checkout"
                >
                  Hoàn Thành
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Paypal from "./Paypal.vue";
import { CartService, error, isPending } from "../../services/CartService";
import { NotifyService } from "../../services/NotifyService";
export default {
  components: { Paypal },
  name: "MainCheckout",
  setup() {
    return { error, isPending };
  },
  data() {
    return {
      active: false,
      pay_method: "",
      showPaypal: false,
      userForm: {
        id: "",
        fullName: "",
        phoneNumber: "",
        email: "",
        city: "",
        district: "",
        ward: "",
        street: "",
        address: "",
        note: "",
      },
      items: [],
    };
  },
  computed: {
    ...mapState("checkout", ["itemsCheckout", "status"]),
    ...mapState("users", ["userInformation"]),
  },
  methods: {
    ...mapMutations("cart", ["removeAllItems"]),
    ...mapMutations("checkout", ['setStatus']),
    showPaypalMethod() {
      this.pay_method = "Paypal";
      this.showPaypal = true;
    },
    showCodMethod() {
      this.pay_method = "Thanh toán khi nhận hàng (COD)";
      this.showPaypal = false;
    },
    showMethods() {
      this.active = !this.active;
      this.showPaypal = false;
    },
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    async checkout() {
      const response = this.checkCondition();
      let paymentStatus = "Chưa thanh toán";
      if (this.pay_method === "Thanh toán khi nhận hàng (COD)") {
        paymentStatus = "Chưa thanh toán!";
      } else {
        if (this.status === "COMPLETED") {
          paymentStatus = "Đã Thanh Toán";
        } else {
          paymentStatus = "Chờ xác nhận thanh toán!";
        }
      }
      if (response) {
        const data = this.items.map((item) => {
          return {
            category: item.category,
            id: item.id,
            index: item.index,
            name: item.name,
            price: item.price,
            qty: item.qty,
            sale_off: item.sale_off,
            urlImage: item.urlImage,
          };
        });
        const res = await CartService.add({
          uid: this.userForm.id,
          fullName: this.userForm.fullName,
          email: this.userForm.email,
          phoneNumber: this.userForm.phoneNumber,
          address: `${this.userForm.city}, ${this.userForm.district}, ${this.userForm.ward}, ${this.userForm.street}`,
          addressSpecific: this.userForm.address,
          note: this.userForm.note,
          pay_method: this.pay_method,
          items: data,
          total: this.itemsCheckout.total,
          paymentStatus: paymentStatus,
          status: "Đang xác nhận đơn hàng",
        });
        if (res) {
          const data = {
            title: "Đặt hàng thành công trên hệ thống shop bán đồ chơi Toyqo",
            urlImageUser: this.userInformation.photoURL,
            user: this.userInformation.displayName,
          };
          await NotifyService.add(data);
          this.setStatus("");
          this.removeAllItems();
          this.$router.push("/order-complete");
        }
      }
    },
    checkCondition() {
      if (
        this.userForm.fullName !== "" &&
        this.userForm.phoneNumber !== "" &&
        this.userForm.email !== "" &&
        this.userForm.city !== "" &&
        this.userForm.district !== "" &&
        this.userForm.ward !== "" &&
        this.userForm.street !== ""
      ) {
        if (this.pay_method !== "") {
          return true;
        } else {
          alert("Vui lòng lựa chọn phương thức thanh toán!");
        }
      } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
      }
    },
  },
  mounted() {
    this.items = this.itemsCheckout.items[0];
    this.userForm.fullName = this.userInformation.multiFactor.user.displayName;
    this.userForm.email = this.userInformation.multiFactor.user.email;
    this.userForm.id = this.userInformation.multiFactor.user.uid;
    this.userForm.note = this.itemsCheckout.note;
  },
};
</script>

<style scoped src="@/assets/css/components/checkout/Checkout.css"></style>
