<template>
  <div>
    <user-layout>
        <bread-crumbs :title="'Wishlist'"/>
        <main-wishlist/>
        <brands/>
    </user-layout>
  </div>
</template>

<script>
import BreadCrumbs from '../../components/common/BreadCrumbs.vue';
import Brands from '../../components/home/brands/Brands.vue';
import UserLayout from "../../components/layout/UserLayout.vue";
import MainWishlist from '../../components/wishlist/MainWishlist.vue';
export default {
  name: "Wishlist",
  components: { UserLayout, BreadCrumbs, Brands, MainWishlist },
};
</script>

<style scoped>

</style>