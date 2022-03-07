<template>
  <div class="testimonial-bg">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title text-center aos-init aos-animate">
            <h2 class="title text-white">Testimonials</h2>
            <p class="sub-title text-white">What they say</p>
          </div>
          <div class="aos-init aos-animate">
            <swiper class="swiper gallery-top testimonial-carousel " :options="swiperOptionTop" ref="swiperTop">
              <swiper-slide class=" swiper-slide-active" v-for="(item, index) in listAvatar" :key="index">
                <img
                  :src="item.img"
                  alt=""
                />
              </swiper-slide>
            </swiper>
            <swiper class="swiper gallery-thumbs testimonial-content" :options="swiperOptionThumbs" ref="swiperThumbs">
                <swiper-slide v-for="(item, index) in listInfo" :key="index">
                    <p>
                        {{item.content}}
                    </p>
                    <span class="ratings">
                      <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
                      <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
                      <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
                      <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
                      <b-icon class="testimonials__ratings-icon" icon="star"></b-icon>
                    </span>
                    <span class="rating-num text-light">
                        {{item.rating}}
                    </span>
                    <h4 class="testimonial-author mb-0">{{item.author}}</h4>
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
          loop: true,
          loopedSlides: 1, // looped slides should be the same
          spaceBetween: 1,
          navigation: {
          }
        },
        swiperOptionThumbs: {
          loop: true,
          loopedSlides: 1, // looped slides should be the same
          spaceBetween: 3,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        },
        listAvatar:[
        {
          img:require("@/assets/images/home/testimonials/thumb-1.jpg"),
        },
        {
          img:require("@/assets/images/home/testimonials/thumb-2.jpg"),
        },
        {
          img:require("@/assets/images/home/testimonials/thumb-3.jpg"),
        },
        {
          img:require("@/assets/images/home/testimonials/thumb-4.jpg"),
        }
        ],
        listInfo:[
        {
          rating:5,
          author:"james",
          content:"Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque"
        },
                {
          rating:5,
          author:"jonny",
          content:"Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque"
        },
                {
          rating:5,
          author:"foden",
          content:"Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque"
        },
                {
          rating:5,
          author:"Mappbe",
          content:"Vivamus a lobortis ipsum, vel condimentum magna. Etiam id turpis tortor. Nunc scelerisque, nisi a blandit varius, nunc purus venenatis ligula, sed venenatis orci augue nec sapien. Cum sociis natoque"
        },
        ]
      }
    },
    props: {
      img: {
        type: String,
        default:""      
      },
      rating:{
        type: Number,
        default: 0,
      },
      author:{
        type: String,
        default:"",
      },
      content:{
        type: String,
        default:"",
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$swiper
        const swiperThumbs = this.$refs.swiperThumbs.$swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
};
</script>

<style scoped src="@/assets/css/components/home/testimonials.css">
</style>