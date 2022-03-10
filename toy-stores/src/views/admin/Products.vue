<template>
  <div>
    <admin-layout>
      <bread-crumbs-admin :title="'Products Management'" />
      <main-products />
    </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from "../../components/admin/BreadCrumbsAdmin.vue";
import MainProducts from "../../components/admin/products/MainProducts.vue";
import AdminLayout from "../../components/layout/AdminLayout.vue";
export default {
  components: { AdminLayout, BreadCrumbsAdmin, MainProducts },
  name: "Categories",
};
</script>

<style scoped></style>
