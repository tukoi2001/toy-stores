<template>
  <b-container>
    <b-row class="mb-n3">
      <b-col md="6" lg="4" class="mb-10" v-for="(item, index) in listOfBlogs" :key="index">
        <div class="single-blog">
          <div class="blog-thumb">
            <a href="" @click.prevent="getBlogDetails(item)">
              <img class="fit-image" :src="item.urlImage" alt="Blog Image" />
            </a>
          </div>
          <div class="blog-content">
            <div class="blog-meta">
              <p>
                {{ item.createdAt }} | <span>{{ item.author }}</span>
              </p>
            </div>
            <h5 class="blog-title">
              <a href="" @click.prevent="getBlogDetails(item)">{{ item.name }}</a>
            </h5>
            <a href="" @click.prevent="getBlogDetails(item)" class="link mt-3">
              <span>Xem Thêm</span></a
            >
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "SingleBlog",
  props: {
    listOfBlogs: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions('blogs', ['actionSetBlogDetail']),
    getBlogDetails(blog) {
      const id = `${blog.slug} ${blog.id}`;
      this.actionSetBlogDetail(blog);
      this.$router.push(`/blogs/${id}`);
    }
  }
};
</script>

<style scoped src="@/assets/css/components/blogs/SingleBlog.css"></style>
