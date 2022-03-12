<template>
  <div class="best-seller-product">
    <div class="collection__wrapper mt-0 position-relative">
      <b-container>
        <b-row class="row mb-lg-5 mb-4">
          <b-col lg="" cols="12">
            <div class="section-title mb-0 text-center">
              <h2 class="title mb-2">Sản phẩm bán chạy</h2>
              <p>Thêm các sản phẩm bán chạy nhất vào danh sách hàng tuần</p>
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
          image: require("@/assets/images/common/products/demo-best-seller-products/1.jpg"),
          status: "sale",
          sale: "-30%",
          title: "Trận chiến pháo đài băng Eldrador",
          newPrice: "2999000",
          oldPrice: "2099000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-best-seller-products/1.jpg"),
          status: "sale",
          sale: "-30%",
          title: "Trận chiến pháo đài băng Eldrador",
          newPrice: "2999000",
          oldPrice: "2099000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-best-seller-products/2.jpg"),
          status: "new",
          sale: "0%",
          title: "Cờ tỷ phú Monopoly Peppa Pig Bé Heo Hồng",
          newPrice: "679000",
          oldPrice: "679000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-best-seller-products/2.jpg"),
          status: "new",
          sale: "0%",
          title: "Cờ tỷ phú Monopoly Peppa Pig Bé Heo Hồng",
          newPrice: "679000",
          oldPrice: "679000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-best-seller-products/1.jpg"),
          status: "sale",
          sale: "-30%",
          title: "Trận chiến pháo đài băng Eldrador",
          newPrice: "2999000",
          oldPrice: "2099000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-best-seller-products/1.jpg"),
          status: "sale",
          sale: "-30%",
          title: "Trận chiến pháo đài băng Eldrador",
          newPrice: "2999000",
          oldPrice: "2099000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-best-seller-products/2.jpg"),
          status: "new",
          sale: "0%",
          title: "Cờ tỷ phú Monopoly Peppa Pig Bé Heo Hồng",
          newPrice: "679000",
          oldPrice: "679000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-best-seller-products/2.jpg"),
          status: "new",
          sale: "0%",
          title: "Cờ tỷ phú Monopoly Peppa Pig Bé Heo Hồng",
          newPrice: "679000",
          oldPrice: "679000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-best-seller-products/1.jpg"),
          status: "sale",
          sale: "-30%",
          title: "Trận chiến pháo đài băng Eldrador",
          newPrice: "2999000",
          oldPrice: "2099000",
        },
        {
          link: "/product",
          image: require("@/assets/images/common/products/demo-best-seller-products/1.jpg"),
          status: "sale",
          sale: "-30%",
          title: "Trận chiến pháo đài băng Eldrador",
          newPrice: "2999000",
          oldPrice: "2099000",
        },
      ],
    };
  },
};
</script>

<style scoped src="@/assets/css/components/home/featured-collection.css">
</style>