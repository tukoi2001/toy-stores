<template>
  <div>
    <user-layout>
      <bread-crumbs :title="'Checkout'"/>
      <main-checkout/>
      <brands/>
    </user-layout>
  </div>
</template>

<script>
import MainCheckout from '../../components/checkout/MainCheckout.vue';
import BreadCrumbs from '../../components/common/BreadCrumbs.vue';
import Brands from '../../components/home/brands/Brands.vue';
import UserLayout from "../../components/layout/UserLayout.vue";
export default {
  name: "Checkout",
  components: { UserLayout, BreadCrumbs, Brands, MainCheckout },
};
</script>

<style scoped>

</style>