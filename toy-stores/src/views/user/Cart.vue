<template>
  <div>
    <user-layout>
        <bread-crumbs :title="'Cart'"/>
        <main-cart/>
        <brands/>
    </user-layout>
  </div>
</template>

<script>
import MainCart from '../../components/cart/MainCart.vue';
import BreadCrumbs from '../../components/common/BreadCrumbs.vue';
import Brands from '../../components/home/brands/Brands.vue';
import UserLayout from "../../components/layout/UserLayout.vue";
export default {
  name: "Cart",
  components: { UserLayout, BreadCrumbs, MainCart, Brands },
};
</script>

<style scoped>

</style>