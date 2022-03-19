<template>
  <div>
    <div v-if="!paidFor">
      <h1 class="paypal_title">Thanh toán đơn hàng - {{ formatPrice(totalPrice) }} hoặc {{ formatPrice1(totalPrice/23000) }}</h1>
    </div>

    <div v-if="paidFor">
      <h1 class="paypal_title">Bạn đã thanh toán thành công đơn hàng! Vui lòng kiểm tra nhận hàng giúp shop!</h1>
    </div>

    <div ref="paypal"></div>
  </div>
</template>

<script>
export default {
  name: "Paypal",
  data: function () {
    return {
      loaded: false,
      paidFor: false,
      product: {
        description: "Đơn hàng đồ chơi!",
      },
    };
  },
  props: {
        totalPrice: {
          type: Number,
          default: 1000
        }
    },
  mounted: function () {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=AWsAs2GYnbIEOhLDXTZ6QPA2avxwntIkWuY5QvulraiCKzpNitFV7FeI8mUGRNNoeDbCcDk7K4fBDSNn";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function () {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.totalPrice / 23000,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    formatPrice1(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
  },
};
</script>

<style scoped>
.paypal_title {
    font-size: 1.5rem;
    text-align: center;
    padding: 10px;
    color: #2abf20;
    font-weight: bold;
    background-color: #f5f5f5;
}
</style>
