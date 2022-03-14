<template>
  <div class="slider">
    <section class="slider-box">
      <div
        class="
          hero-slider
          swiper-container
          swiper-container-fade
          swiper-container-initialized
          swiper-container-horizontal
        "
      >
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="(item, index) in listSlides" :key="index">
            <div class="hero-slide-bg">
              <img :src="item.img" alt="" />
            </div>
            <div class="container">
              <div class="hero-slide-content">
                <h2 class="titles m-0 fw-bold">
                  {{ item.titleOne }}<br />{{ item.titleTwo }}
                </h2>
                <p>{{ item.content }}</p>
                <router-link to="/categories/tat-ca-san-pham" class="btn btn-primary btn-hover-light">Mua Ngay</router-link>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        height: 3600,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      listSlides: [
        {
          img: require("@/assets/images/home/slider/1.jpg"),
          titleOne: "Sản Phẩm Mới",
          titleTwo: "Cập nhật nhiều sản phẩm mới nhất",
          content: "Bộ sưu tập sản phẩm & đồ chơi trẻ em mới nhất, các sản phẩm luôn luôn cập nhật!",
        },
        {
          img: require("@/assets/images/home/slider/6.jpg"),
          titleOne: "Săn Sales Sốc!",
          titleTwo: "Các sản phẩm giảm giá đến 30%",
          content: "Bộ sưu tập sản phẩm & đồ chơi trẻ em mới nhất, các sản phẩm luôn luôn cập nhật!",
        },
      ],
    };
  },
  props: {
    img: {
      type: String,
      default: "",
    },
    titleOne: {
      type: String,
      default: "",
    },
    titleTwo: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped src="@/assets/css/components/home/slider.css">
</style>