<template>
  <div>
    <user-layout>
      <banners />
      <featured-collection/>
    </user-layout>
  </div>
</template>

<script>
import Banners from "../components/home/banners/Banners.vue";
import FeaturedCollection from '../components/home/featured-collection/FeaturedCollection.vue';
import UserLayout from "../components/layout/UserLayout.vue";
export default {
  name: "Home",
  components: { UserLayout, Banners, FeaturedCollection },
};
</script>

<style scoped src="@/assets/css/components/home/home.css">
</style>