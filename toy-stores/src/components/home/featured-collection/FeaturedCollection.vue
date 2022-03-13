<template>
  <div class="best-seller-product">
    <div class="collection__wrapper mt-0 position-relative">
      <b-container>
        <b-row class="row mb-lg-5 mb-4">
          <b-col lg="" cols="12">
            <div class="section-title mb-0 text-center">
              <div class="title-container">
                <h2 class="fw-bold">Sản phẩm mới nhất <b-icon icon="emoji-heart-eyes"></b-icon></h2>
              </div>
              <p class="text-start my-5">Các sản phẩm mới nhất được cập nhật hàng ngày!</p>
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
  name: "FeaturedCollection",
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
        // autoplay: {
          
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        autoplay: false,
      },
      Products: [],
    };
  },
};
</script>

<style scoped src="@/assets/css/components/home/featured-collection.css">
</style>