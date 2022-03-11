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
                <h2 class="titles m-0">
                  {{ item.titleOne }}<br />{{ item.titleTwo }}
                </h2>
                <p>{{ item.content }}</p>
                <a href="" class="btn btn-primary btn-hover-light">Mua Ngay</a>
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
          titleOne: " Điểm Đến Mới ",
          titleTwo: "Được giảm giá cố định 50% ",
          content: "Bộ sưu tập sản phẩm & đồ chơi trẻ em mới nhất",
        },
        {
          img: require("@/assets/images/home/slider/3.jpg"),
          titleOne: "Điểm Đến Mới ",
          titleTwo: "Được giảm giá cố định 30% ",
          content: "Bộ sưu tập sản phẩm & đồ chơi trẻ em mới nhất",
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