<template>
  <div class="section-padding">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center aos-init aos-animate">
              <h2 class="fw-bold">Blogs</h2>
              <p class="sub-title">Những khách hàng đã sử dụng sản phẩm của chúng tôi nói gì?</p>
            </div>
            <div class="latest-blog-carousel">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide class="swiper-slide" v-for="(item, index) in listInfo" :key="index">
                  <div class="single-blog">
                    <div class="blog-thumb">
                      <a href="">
                        <img class="fit-image" :src="item.image" alt="">
                      </a>
                    </div>
                    <div class="blog-content">
                      <div class="blog-meta">
                        <p>
                          {{item.dateBlogs}}
                          <span>{{item.author}}</span>
                        </p>
                      </div>
                      <h5 class="blog-title">
                        <a href="">{{item.blogTitle}}</a>
                      </h5>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      listInfo: [
        {
          image: require("@/assets/images/home/blog/1.jpg"),
          dateBlogs: "03/11/2021 | ",
          blogTitle: "Một thực tế đã được thiết lập từ lâu rằng người đọc sẽ bị phân tâm",
          author: "Admin",
        },
        {
          image: require("@/assets/images/home/blog/2.jpg"),
          dateBlogs: "03/11/2021 | ",
          blogTitle: "Một thực tế đã được thiết lập từ lâu rằng người đọc sẽ bị phân tâm",
          author: "Admin",
        },
        {
          image: require("@/assets/images/home/blog/3.jpg"),
          dateBlogs: "03/11/2021 | ",
          blogTitle: "Một thực tế đã được thiết lập từ lâu rằng người đọc sẽ bị phân tâm",
          author: "Admin",
        },
        {
          image: require("@/assets/images/home/blog/1.jpg"),
          dateBlogs: "03/11/2021 | ",
          blogTitle: "Một thực tế đã được thiết lập từ lâu rằng người đọc sẽ bị phân tâm",
          author: "Admin",
        },
        {
          image: require("@/assets/images/home/blog/2.jpg"),
          dateBlogs: "03/11/2021 | ",
          blogTitle: "Một thực tế đã được thiết lập từ lâu rằng người đọc sẽ bị phân tâm",
          author: "Admin",
        },
        
      ],
    };
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    dateBlogs: {
      type: String,
      default: "",
    },
    tblogTitle: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
  },
};

</script>

<style scoped src="@/assets/css/components/home/blogs.css">

</style>