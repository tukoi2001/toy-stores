<template>
  <div>
    <user-layout>
      <slider />
      <banners />
      <featured-collection />
      <product-list/>
      <testimonials />
      <home-blogs />
    </user-layout>
  </div>
</template>

<script>
import Slider from "../components/home/slider/Slider.vue";
import Banners from "../components/home/banners/Banners.vue";
import FeaturedCollection from "../components/home/featured-collection/FeaturedCollection.vue";
import UserLayout from "../components/layout/UserLayout.vue";
import Testimonials from '../components/home/testimonials/Testimonials.vue';
import HomeBlogs from '../components/home/blogs/HomeBlogs.vue';
import ProductList from '../components/home/product-list/ProductList.vue';
export default {
  name: "Home",
  components: { UserLayout, Slider, Banners, FeaturedCollection, Testimonials, HomeBlogs, ProductList },
};
</script>

<style scoped src="@/assets/css/components/home/home.css">
</style>