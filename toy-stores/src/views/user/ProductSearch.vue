<template>
  <div> 
    <user-layout>
        <bread-crumbs :title="'Search Result'"/>
        <main-product-search/>
        <brands/>
    </user-layout>
  </div>
</template>

<script>
import BreadCrumbs from '../../components/common/BreadCrumbs.vue';
import Brands from '../../components/home/brands/Brands.vue';
import UserLayout from '../../components/layout/UserLayout.vue';
import MainProductSearch from '../../components/product/MainProductSearch.vue';
export default {
  components: { UserLayout, BreadCrumbs, Brands, MainProductSearch },
  name: "ProductSearch",
};
</script>

<style scoped>
.breadcrumb-box {
  margin-bottom: 50px;
}
</style>