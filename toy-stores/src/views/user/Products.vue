<template>
  <div> 
    <user-layout>
        <bread-crumbs :title="'Shop'"/>
        <main-product/>
        <brands/>
    </user-layout>
  </div>
</template>

<script>
import BreadCrumbs from '../../components/common/BreadCrumbs.vue';
import Brands from '../../components/home/brands/Brands.vue';
import UserLayout from '../../components/layout/UserLayout.vue';
import MainProduct from '../../components/product/MainProduct.vue';
export default {
  components: { UserLayout, BreadCrumbs, MainProduct, Brands },
  name: "Products",
};
</script>

<style scoped>
.breadcrumb-box {
  margin-bottom: 50px;
}
</style>