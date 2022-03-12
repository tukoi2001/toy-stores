<template>
  <div class="testimonial-bg">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title text-center aos-init aos-animate">
            <h2 class="title text-white">Đánh giá</h2>
            <p class="sub-title text-white">
              Những khách hàng đã sử dụng sản phẩm của chúng tôi nói gì?
            </p>
          </div>
          <div class="aos-init aos-animate">
            <swiper
              class="swiper gallery-top testimonial-carousel"
              :options="swiperOptionTop"
              ref="swiperTop"
            >
              <swiper-slide
                class="swiper-slide-active"
                v-for="(item, index) in listAvatar"
                :key="index"
              >
                <img
                  @click="showContent(index)"
                  :class="{ active: currentContent == index }"
                  :src="item.img"
                  :alt="item.alt"
                />
              </swiper-slide>
            </swiper>
            <swiper
              class="swiper gallery-thumbs testimonial-content"
              :options="swiperOptionThumbs"
              ref="swiperThumbs"
            >
              <swiper-slide v-for="(item, index) in listInfo" :key="index">
                <p>
                  {{ item.content }}
                </p>
                <span class="ratings">
                  <b-icon
                    class="testimonials__ratings-icon"
                    icon="star"
                  ></b-icon>
                  <b-icon
                    class="testimonials__ratings-icon"
                    icon="star"
                  ></b-icon>
                  <b-icon
                    class="testimonials__ratings-icon"
                    icon="star"
                  ></b-icon>
                  <b-icon
                    class="testimonials__ratings-icon"
                    icon="star"
                  ></b-icon>
                  <b-icon
                    class="testimonials__ratings-icon"
                    icon="star"
                  ></b-icon>
                </span>
                <span class="rating-num text-light">
                  {{ item.rating }}
                </span>
                <h4 class="testimonial-author mb-0">{{ item.author }}</h4>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOptionTop: {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        loopedSlides: 1, // looped slides should be the same
        spaceBetween: 1,
        navigation: {},
        slideToClickedSlide: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 1, // looped slides should be the same
        spaceBetween: 3,
        slidesPerView: "auto",
        touchRatio: 0.2,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      },
      currentContent: 0,
      listAvatar: [
        {
          img: require("@/assets/images/home/testimonials/1.jpg"),
          alt: "baby-1",
        },
        {
          img: require("@/assets/images/home/testimonials/2.jpg"),
          alt: "baby-2",
        },
        {
          img: require("@/assets/images/home/testimonials/3.jpg"),
          alt: "baby-3",
        },
        {
          img: require("@/assets/images/home/testimonials/4.jpg"),
          alt: "baby-4",
        },
      ],
      listInfo: [
        {
          rating: 5,
          author: "Hằng",
          content:
            "Sống từ chính viên thuốc, hoặc nước sốt tuyệt vời. Ngay cả kẻ tra tấn đáng ghê tởm đó. Bây giờ sô cô la, nếu không phải từ độ mịn của các thanh, bây giờ là các mạng lưới độc hại thuần túy Với bạn bè của bạn",
        },
        {
          rating: 5,
          author: "Ngọc",
          content:
            "Giúp các bé xa CẢM ỨNG – Thích ứng đồ chơi – Vui chơi thỏa thích – Tích thật nhiều điểm",
        },
        {
          rating: 5,
          author: "Phúc",
          content: "Con vui khỏe – mẹ trẻ lâu – chồng yêu sâu – vui có thưởng",
        },
        {
          rating: 5,
          author: "Văn Anh",
          content:
            "Vì tương lai con em chúng ta, hãy cho bé vui chơi hồn nhiên",
        },
      ],
      methods: {
        showContent(index) {
          this.currentContent = index;
        },
      },
      computed: {
        showCurrentContent() {
          let index = this.currentContent;
          return this.listInfo[index];
        },
      },
    };
  },
  props: {
    img: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      default: 0,
    },
    author: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style scoped src="@/assets/css/components/home/testimonials.css">
</style>