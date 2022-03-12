<template>
  <div class="on-sale-product">
    <div class="collection__wrapper mt-0 position-relative">
      <b-container>
        <b-row class="row mb-lg-5 mb-4">
          <b-col lg="" cols="12">
            <div class="section-title mb-0 text-center">
              <h2 class="title mb-2">Sản phẩm đang giảm giá</h2>
              <p>Các sản phẩm đang giảm giá trong danh sách hàng tuần</p>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="product-carousel arrow-outside-container">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide v-for="(item, index) in Products" :key="index">
                  <!-- Product Tab Start -->
                  <product
                    :link="item.link"
                    :image="item.image"
                    :status="item.status"
                    :sale="item.sale"
                    :title="item.title"
                    :newPrice="item.newPrice"
                    :oldPrice="item.oldPrice"
                  />
                  <!-- Product Tab End -->
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Product from "../../common/products/Product.vue";
export default {
  name: "BestSellerProduct",
  components: { Swiper, SwiperSlide, Product },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 30,
        loop: true,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      Products: [
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-on-sale-products/1.jpg"),
          status: "sale",
          sale: "-30%",
          title: "Đồ chơi mô hình theo tỷ lệ thu nhỏ 1:16 Xe thu gom rác thải",
          newPrice: "1539000",
          oldPrice: "2199000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-on-sale-products/1.jpg"),
          status: "sale",
          sale: "-30%",
          title: "Đồ chơi mô hình theo tỷ lệ thu nhỏ 1:16 Xe thu gom rác thải",
          newPrice: "1539000",
          oldPrice: "2199000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-on-sale-products/2.jpg"),
          status: "sale",
          sale: "-20%",
          title: "Chiến xe địa hình của Kai",
          newPrice: "255000",
          oldPrice: "319000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-on-sale-products/2.jpg"),
          status: "sale",
          sale: "-20%",
          title: "Chiến xe địa hình của Kai",
          newPrice: "255000",
          oldPrice: "319000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-on-sale-products/1.jpg"),
          status: "sale",
          sale: "-30%",
          title: "Đồ chơi mô hình theo tỷ lệ thu nhỏ 1:16 Xe thu gom rác thải",
          newPrice: "1539000",
          oldPrice: "2199000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-on-sale-products/1.jpg"),
          status: "sale",
          sale: "-30%",
          title: "Đồ chơi mô hình theo tỷ lệ thu nhỏ 1:16 Xe thu gom rác thải",
          newPrice: "1539000",
          oldPrice: "2199000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-on-sale-products/2.jpg"),
          status: "sale",
          sale: "-20%",
          title: "Chiến xe địa hình của Kai",
          newPrice: "255000",
          oldPrice: "319000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-on-sale-products/2.jpg"),
          status: "sale",
          sale: "-20%",
          title: "Chiến xe địa hình của Kai",
          newPrice: "255000",
          oldPrice: "319000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-on-sale-products/1.jpg"),
          status: "sale",
          sale: "-30%",
          title: "Đồ chơi mô hình theo tỷ lệ thu nhỏ 1:16 Xe thu gom rác thải",
          newPrice: "1539000",
          oldPrice: "2199000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-on-sale-products/1.jpg"),
          status: "sale",
          sale: "-30%",
          title: "Đồ chơi mô hình theo tỷ lệ thu nhỏ 1:16 Xe thu gom rác thải",
          newPrice: "1539000",
          oldPrice: "2199000",
        },
      ],
    };
  },
};
</script>

<style scoped src="@/assets/css/components/home/featured-collection.css">
</style>