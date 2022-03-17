<template>
  <div>
    <user-layout>
      <bread-crumbs :title="'Blogs'" />
      <b-container>
        <div class="blogs-wrapper">
          <b-row class="mb-n3">
            <b-col
              md="6"
              lg="4"
              class="mb-10"
              v-for="(item, index) in ListOfBlogs"
              :key="index"
            >
              <single-blog
                :link="item.link"
                :image="item.image"
                :date="item.date"
                :author="item.author"
                :title="item.title"
              />
            </b-col>
          </b-row>
        </div>
      </b-container>
      <brands/>
    </user-layout>
  </div>
</template>

<script>
import SingleBlog from "../../components/blogs/SingleBlog.vue";
import BreadCrumbs from "../../components/common/BreadCrumbs.vue";
import Brands from '../../components/home/brands/Brands.vue';
import UserLayout from "../../components/layout/UserLayout.vue";
export default {
  name: "Blogs",
  components: { SingleBlog, UserLayout, BreadCrumbs, Brands },
  data() {
    return {
      ListOfBlogs: [
        {
          link: "/blogs/:id",
          image: require("@/assets/images/blogs/demo/1.jpg"),
          date: "03/11/2021",
          author: "ADMIN",
          title: "TÁC DỤNG CỦA ĐỒ CHƠI TRẺ EM ĐỐI VỚI SỰ PHÁT TRIỂN CỦA BÉ",
        },
        {
          link: "/blogs/:id",
          image: require("@/assets/images/blogs/demo/2.jpg"),
          date: "03/11/2021",
          author: "ADMIN",
          title: "TÁC DỤNG CỦA ĐỒ CHƠI TRẺ EM ĐỐI VỚI SỰ PHÁT TRIỂN CỦA BÉ",
        },
        {
          link: "/blogs/:id",
          image: require("@/assets/images/blogs/demo/3.jpg"),
          date: "03/11/2021",
          author: "ADMIN",
          title: "TÁC DỤNG CỦA ĐỒ CHƠI TRẺ EM ĐỐI VỚI SỰ PHÁT TRIỂN CỦA BÉ",
        },
        {
          link: "/blogs/:id",
          image: require("@/assets/images/blogs/demo/1.jpg"),
          date: "03/11/2021",
          author: "ADMIN",
          title: "TÁC DỤNG CỦA ĐỒ CHƠI TRẺ EM ĐỐI VỚI SỰ PHÁT TRIỂN CỦA BÉ",
        },
        {
          link: "/blogs/:id",
          image: require("@/assets/images/blogs/demo/2.jpg"),
          date: "03/11/2021",
          author: "ADMIN",
          title: "TÁC DỤNG CỦA ĐỒ CHƠI TRẺ EM ĐỐI VỚI SỰ PHÁT TRIỂN CỦA BÉ",
        },
        {
          link: "/blogs/:id",
          image: require("@/assets/images/blogs/demo/3.jpg"),
          date: "03/11/2021",
          author: "ADMIN",
          title: "TÁC DỤNG CỦA ĐỒ CHƠI TRẺ EM ĐỐI VỚI SỰ PHÁT TRIỂN CỦA BÉ",
        },
        {
          link: "/blogs/:id",
          image: require("@/assets/images/blogs/demo/1.jpg"),
          date: "03/11/2021",
          author: "ADMIN",
          title: "TÁC DỤNG CỦA ĐỒ CHƠI TRẺ EM ĐỐI VỚI SỰ PHÁT TRIỂN CỦA BÉ",
        },
        {
          link: "/blogs/:id",
          image: require("@/assets/images/blogs/demo/2.jpg"),
          date: "03/11/2021",
          author: "ADMIN",
          title: "TÁC DỤNG CỦA ĐỒ CHƠI TRẺ EM ĐỐI VỚI SỰ PHÁT TRIỂN CỦA BÉ",
        },
        {
          link: "/blogs/:id",
          image: require("@/assets/images/blogs/demo/3.jpg"),
          date: "03/11/2021",
          author: "ADMIN",
          title: "TÁC DỤNG CỦA ĐỒ CHƠI TRẺ EM ĐỐI VỚI SỰ PHÁT TRIỂN CỦA BÉ",
        },
      ],
    };
  },
};
</script>

<style scoped src="@/assets/css/components/user/Blogs.css">
</style>