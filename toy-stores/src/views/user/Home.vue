<template>
  <div>
    <user-layout>
      <slider />
      <banners />
      <featured-collection />
      <best-seller-product/>
      <on-sale-product/>
      <testimonials/>
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
import BestSellerProduct from '../../components/home/best-seller-product/BestSellerProduct.vue'
import OnSaleProduct from '../../components/home/on-sale-product/OnSaleProduct.vue';
import HomeBlogs from '../../components/home/blogs/HomeBlogs.vue';
export default {
  name: "Home",
  components: { UserLayout, Slider, Banners, FeaturedCollection, Brands, Testimonials, BestSellerProduct, OnSaleProduct, HomeBlogs },
};
</script>

<style scoped src="@/assets/css/components/home/home.css">

</style>