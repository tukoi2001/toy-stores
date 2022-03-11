<template>
  <div class="brands">
    <b-container>
      <b-row>
        <b-col>
          <div class="brand-logo-carousel arrow-outside-container border-top border-bottom">
            <swiper class="swiper" :options="swiperOption">
              <swiper-slide v-for="(item, index) in imageOfProducts" :key="index">
                <img :src="item">
              </swiper-slide>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "Brands",
  components: { Swiper, SwiperSlide },
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
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
      imageOfProducts: [
        require("@/assets/images/home/brands/demo/1.png"),
        require("@/assets/images/home/brands/demo/2.png"),
        require("@/assets/images/home/brands/demo/3.png"),
        require("@/assets/images/home/brands/demo/4.png"),
        require("@/assets/images/home/brands/demo/5.png"),
        require("@/assets/images/home/brands/demo/6.png"),
        require("@/assets/images/home/brands/demo/7.png"),
        require("@/assets/images/home/brands/demo/8.png"),
      ]
    };
  },
};
</script>

<style scoped src="@/assets/css/components/home/brands.css">
</style>