<template>
  <div>
    <user-layout>
      <slider />
      <banners />
      <featured-collection />
      <testimonials/>
      <recommend-product/>
      <home-blogs/>
      <brands/>
    </user-layout>
  </div>
</template>

<script>
import Slider from "../../components/home/slider/Slider.vue";
import Banners from "../../components/home/banners/Banners.vue";
import FeaturedCollection from "../../components/home/featured-collection/FeaturedCollection.vue";
import UserLayout from "../../components/layout/UserLayout.vue";
import Brands from '../../components/home/brands/Brands.vue';
import Testimonials from '../../components/home/testimonials/Testimonials.vue';
import HomeBlogs from '../../components/home/blogs/HomeBlogs.vue';
import RecommendProduct from '../../components/home/recommend-product/RecommendProduct.vue';
export default {
  name: "Home",
  components: { UserLayout, Slider, Banners, FeaturedCollection, Brands, Testimonials, HomeBlogs, RecommendProduct },
};
</script>

<style scoped src="@/assets/css/components/home/home.css">

</style>