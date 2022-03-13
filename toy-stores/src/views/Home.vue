<template>
  <div>
    <user-layout>
      <slider />
      <banners />
      <featured-collection />
      <best-seller-product/>
      <on-sale-product/>
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
import BestSellerProduct from '../components/home/best-seller-product/BestSellerProduct.vue';
import OnSaleProduct from '../components/home/product-list/OnSaleProduct.vue';
export default {
  name: "Home",
  components: { UserLayout, Slider, Banners, FeaturedCollection, Testimonials, HomeBlogs, BestSellerProduct, OnSaleProduct, OnSaleProduct },
};
</script>

<style scoped src="@/assets/css/components/home/home.css">
</style>