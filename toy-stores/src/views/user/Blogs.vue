<template>
  <div>
    <user-layout>
      <bread-crumbs :title="'Blogs'" />
      <b-container>
        <div class="blogs-wrapper text-start">
          <h2>Tin mới nhất</h2>
          <p>Những tin tức được cập nhật mới nhất!</p>
          <single-blog :listOfBlogs="listOfBlogs" />
        </div>
      </b-container>
      <brands />
    </user-layout>
  </div>
</template>

<script>
import SingleBlog from "../../components/blogs/SingleBlog.vue";
import BreadCrumbs from "../../components/common/BreadCrumbs.vue";
import Brands from "../../components/home/brands/Brands.vue";
import UserLayout from "../../components/layout/UserLayout.vue";
import { BlogService } from "../../services/BlogService";
export default {
  name: "Blogs",
  components: { SingleBlog, UserLayout, BreadCrumbs, Brands },
  data() {
    return {
      listOfBlogs: [],
    };
  },
  methods: {
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
      this.listOfBlogs = newRes;
      console.log(this.listOfBlogs);
    },
  },
  mounted() {
    this.getDataBlog();
  },
};
</script>

<style scoped src="@/assets/css/components/user/Blogs.css"></style>
