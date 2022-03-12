<template>
  <div class="single-blog">
    <div class="blog-thumb">
      <router-link :to="link">
        <img class="fit-image" :src="image" alt="Blog Image" />
      </router-link>
    </div>
    <div class="blog-content">
      <div class="blog-meta">
        <p>
          {{ date }} | <span>{{ author }}</span>
        </p>
      </div>
      <h5 class="blog-title">
        <router-link :to="link">{{ title }}</router-link>
      </h5>
      <router-link :to="link" class="link mt-3">
        <span>Xem Thêm</span></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleBlog",
  props: {
    link: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    date: {
      type: String,
      default: "",
    },
    author: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped src="@/assets/css/components/blogs/SingleBlog.css">
</style>