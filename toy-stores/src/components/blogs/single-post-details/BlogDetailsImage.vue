<template>
  <!-- Blog Details Image Start -->
  <div
    class="image mb-4"
  >
    <img
      class="fit-image"
      :src="blog.urlImage"
      :alt="blog.slug"
    />
  </div>
  <!-- Blog Details Image End -->
</template>

<script>
import { mapState } from "vuex";
export default {
  name: 'BlogDetailsImage',
  computed: {
    ...mapState('blogs', ['blog'])
  }
};
</script>

<style scoped>
.blog-details .image img {
    width: 100%;
    transition: all 0.5s ease 0s;
}
.fit-image {
    width: 100%;
    object-fit: cover;
}
</style>