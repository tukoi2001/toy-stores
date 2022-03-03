<template>
  <div>
    <div class="cart-offcanvas-wrapper">
      <div class="offcanvas-overlay" @click.stop="hideShowCart"></div>
      <div class="cart-offcanvas-inner">
        <div class="offcanvas-btn-close">
           <a @click.prevent="hideShowCart" href=""><b-icon class="icon" icon="x"></b-icon></a>
        </div>
        <div class="offcanvas-cart-content">
          <div class="cart-product-wrapper mb-4 pb-4 border-bottom">
            <div class="single-cart-product">
              <div class="cart-product-thumb">
                  <img
                    src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-1-480x600.jpg"
                    alt="Cart Product"
                />
              </div>
              <div class="cart-product-content">
                <h3 class="title">
                  New badge product
                </h3>
                <div class="product-quty-price">
                  <span class="cart-quantity">3 <strong> × </strong></span>
                  <span class="price">
                    <span class="new">$70.00</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="cart-product-remove">
              <a href=""><b-icon icon="x"></b-icon></a>
            </div>
          </div>
          <div class="cart-product-total mb-4 pb-4 border-bottom">
            <span class="value">Total</span>
            <span class="price">220$</span>
          </div>
          <div class="cart-product-btn mt-4">
            <a href="" class="btn btn-light btn-hover-primary w-100"
              ><b-icon icon="cart"></b-icon> View cart</a
            >
            <a
              href=""
              class="btn btn-light btn-hover-primary w-100 mt-4"
              ><b-icon icon="arrow-return-right"></b-icon> Checkout</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCart",
  methods: {
      hideShowCart() {
        this.$emit('myEvent');
      }
  }
};
</script>

<style scoped src="@/assets/css/components/common/TheCart.css">
</style>