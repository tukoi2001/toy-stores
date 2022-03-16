<template>
  <div>
    <div class="section section-margin">
      <div class="container">
        <div class="row">
          <div class="text-start">
            <h3 class="cart__title">Giỏ hàng của bạn</h3>
            <p class="cart__des">
              Tất cả sản phẩm của bạn hiện có trong giỏ hàng!
            </p>
          </div>
          <div class="col-12">
            <div class="cart-table table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th class="pro-thumbnail">Hình ảnh</th>
                    <th class="pro-title">Tên sản phẩm</th>
                    <th class="pro-price">Đơn giá</th>
                    <th class="pro-quantity">Số lượng</th>
                    <th class="pro-subtotal">Tổng cộng</th>
                    <th class="pro-remove">Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="items.length < 1">
                    <td colspan="6">
                      <p class="no-item">
                        Chưa có sản phẩm nào được thêm vào giỏ hàng! Vui lòng
                        thêm sản phẩm và tiến hành thanh toán! Cảm ơn!
                      </p>
                    </td>
                  </tr>
                  <tr v-for="(item, index) in items" :key="index" v-else>
                    <td class="pro-thumbnail">
                      <a href="#"
                        ><img
                          class="fit-image"
                          :src="item.urlImage[0]"
                          :alt="item.slug"
                      /></a>
                    </td>
                    <td class="pro-title">
                      <a href="#">{{ item.name }}</a>
                    </td>
                    <td class="pro-price">
                      <span>{{
                        formatPrice(
                          item.price - (item.price / 100) * item.sale_off
                        )
                      }}</span>
                    </td>
                    <td class="pro-quantity">
                      <div class="quantity">
                        <div class="cart-plus-minus">
                          <input
                            class="cart-plus-minus-box"
                            value="1"
                            type="number"
                            v-model="item.qty"
                            min="1" max="50"
                          />
                        </div>
                      </div>
                    </td>
                    <td class="pro-subtotal">
                      <span>{{
                        formatPrice(
                          (item.price - (item.price / 100) * item.sale_off) *
                            item.qty
                        )
                      }}</span>
                    </td>
                    <td class="pro-remove">
                      <a href="" @click.prevent="actionDeleteItem(item.id)"
                        ><b-icon icon="trash-fill"></b-icon
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="cart-button-section">
              <a
                v-if="items.length > 0"
                href=""
                id="btn-scroll"
                @click.prevent="updateItemsCart"
                class="btn btn-primary btn-hover-dark"
                >{{ title }}</a
              >
              <router-link
                to="/categories/tat-ca-san-pham"
                class="btn btn-primary btn-hover-dark"
                >Tiếp tục mua sắm</router-link
              >
              <a
                v-if="items.length > 1"
                href=""
                @click.prevent="removeAllItem"
                class="btn btn-primary btn-hover-dark"
                >Xóa tất cả</a
              >
            </div>
          </div>
        </div>

        <div class="row mt-10 mb-n10" v-if="showCheckout">
          <div class="note my-5 text-start">
            <div class="note-box">
              <span>Lưu ý: <b-icon icon="pencil"></b-icon></span>
            </div>
            <div class="note-content">
              <p>
                <b-icon icon="arrow-return-right" class="note-icon"></b-icon
                >Hiện tại, do tình hình dịch bệnh diễn biến phức tạp và giá xăng
                dầu đang tăng cao. Phí ship của tất cả đơn hàng là 35.000đ và
                giao hàng khắp 64 tỉnh thành!
              </p>
            </div>
          </div>
          <div class="col-lg-6 mb-10">
            <div class="coupon__box my-5 text-start">
              <div class="coupon" @click="showVouchers = !showVouchers">
                <span
                  >Vouchers: <b-icon class="coupon_icon" icon="gift"></b-icon
                ></span>
              </div>
              <div class="note-content" v-if="showVouchers">
                <p>
                  "Hiện tại, bạn chưa có mã giảm giá nào! Thật đáng tiếc!!!"
                </p>
              </div>
            </div>
            <div class="input-textarea">
              <h3 class="title border-0 mb-0">Ghi chú cho người bán</h3>
              <textarea
                name="text"
                id="minitextarea"
                class="input-cupon-textarea"
                cols="30"
                rows="6"
                v-model="note"
              ></textarea>
            </div>
          </div>
          <div class="col-lg-6 mb-10">
            <div class="cart-calculator-wrapper">
              <div class="cart-calculate-items">
                <h3 class="title">Tổng giá trị đơn hàng</h3>
                <div class="table-responsive">
                  <table class="table">
                    <tr>
                      <td>Tổng giá tất cả sản phẩm</td>
                      <td>{{ formatPrice(totalPrice) }}</td>
                    </tr>
                    <tr>
                      <td>Phí Ship</td>
                      <td>+ {{ formatPrice(35000) }}</td>
                    </tr>
                    <tr class="total">
                      <td>Tổng cộng</td>
                      <td class="total-amount">
                        {{ formatPrice(totalPrice + 35000) }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <a
                @click.prevent=""
                v-if="loading"
                href=""
                class="btn btn-primary btn-hover-dark mt-6"
                >Loading...</a
              >
              <a
                v-else
                @click.prevent="checkout"
                href=""
                class="btn btn-primary btn-hover-dark mt-6"
                >Checkout</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";
export default {
  name: "MainCart",
  data() {
    return {
      showCheckout: false,
      showVouchers: false,
      title: "Tiếp tục",
      note: '',
      total: 0,
      loading: false
    };
  },
  computed: {
    ...mapState("cart", ["items"]),
    ...mapGetters("cart", ["totalPrice"]),
  },
  methods: {
    ...mapMutations("cart", ["removeAllItems"]),
    ...mapMutations("checkout", ["initItems"]),
    ...mapActions("cart", ["actionInitItems", "actionDeleteItem"]),
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    scrollTo() {
      const distance = document.getElementById("btn-scroll").offsetTop;
      window.scrollTo({
        top: distance + 600,
        behavior: "smooth",
      });
    },
    updateItemsCart() {
      if (this.title === "Tiếp tục") {
        this.showCheckout = true;
        this.scrollTo();
      } else {
        localStorage.setItem("cartItems", JSON.stringify(this.items));
        this.actionInitItems();
        alert("Cập nhật giỏ hàng thành công!!!");
        this.showCheckout = true;
        this.scrollTo();
      }
        this.total = this.totalPrice + 35000;       
    },
    removeAllItem() {
      this.removeAllItems();
      this.actionInitItems();
    },
    checkout() {
        this.loading = true;
        const data = {
            items: [this.items],
            total: this.total,
            note: this.note,
            totalPrice: this.totalPrice
        }
        setTimeout(() => {
          this.initItems(data);
          this.loading = false;
          this.$router.push('/checkout');
        }, 2000)
    }
  },
  watch: {
    items: {
      handler() {
        this.title = 'Cập nhật giỏ hàng';
      },
      deep: true,
    },
  },
};
</script>

<style scoped src="@/assets/css/components/cart/Cart.css"></style>
