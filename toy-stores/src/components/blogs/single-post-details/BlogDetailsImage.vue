<template>
  <!-- Blog Details Image Start -->
  <div
    class="image mb-4"
  >
    <img
      class="fit-image"
      src="@/assets/images/blogs/demo/1.jpg"
      alt="Blog"
    />
  </div>
  <!-- Blog Details Image End -->
</template>

<script>
export default {};
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