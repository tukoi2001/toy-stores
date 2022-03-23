<template>
  <div class="section-padding">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center aos-init aos-animate">
              <h2 class="fw-bold">Blogs</h2>
              <p class="sub-title">Trẻ em cần rất nhiều cơ hội để chơi với nhiều loại đồ chơi tốt để sử dụng trí tưởng tượng của trẻ.</p>
            </div>
            <div class="latest-blog-carousel">
              <swiper class="swiper" :options="swiperOption">
                <swiper-slide class="swiper-slide" v-for="(item, index) in listBlogs" :key="index">
                  <div class="single-blog">
                    <div class="blog-thumb">
                      <a href="" @click.prevent="getBlogDetails(item)">
                        <img class="fit-image" :src="item.urlImage" alt="">
                      </a>
                    </div>
                    <div class="blog-content">
                      <div class="blog-meta">
                        <p>
                          {{item.createdAt}} | 
                          <span>{{item.author}}</span>
                        </p>
                      </div>
                      <h5 class="blog-title">
                        <a @click.prevent="getBlogDetails(item)" href="">{{item.name}}</a>
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
import { BlogService } from "../../../services/BlogService";
import { mapActions } from 'vuex'
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
      listBlogs: [],
    };
  },
  methods: {
    ...mapActions('blogs', ['actionSetBlogDetail']),
    async getDataBlog() {
      const response = await BlogService.show();
      const newRes = response.docs.map((item, index) => {
        const createdDate = new Date(
          item.data().createdAt.seconds * 1000 +
            item.data().createdAt.nanoseconds / 1000000
        );
        let myDate = ((createdDate.getUTCDate() + "/" + (createdDate.getMonth() + 1)  + "/" + createdDate.getUTCFullYear()));
        return {
          id: item.id,
          index: index,
          ...item.data(),
          createdAt: myDate
        };
      });
      this.listBlogs = newRes;
    },
    getBlogDetails(blog) {
      const id = `${blog.slug} ${blog.id}`;
      this.actionSetBlogDetail(blog);
      localStorage.setItem("blogDetail", JSON.stringify(blog));
      this.$router.push(`/blogs/${id}`);
    }
  },
  mounted() {
    this.getDataBlog();
  },
};

</script>

<style scoped src="@/assets/css/components/home/blogs.css">

</style>