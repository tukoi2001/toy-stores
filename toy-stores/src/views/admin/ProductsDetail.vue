<template>
  <div>
    <admin-layout>
      <bread-crumbs-admin :title="'Product Detail'" />
      <main-pro-detail />
    </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from "../../components/admin/BreadCrumbsAdmin.vue";
import MainProDetail from "../../components/admin/products/MainProDetail.vue";
import AdminLayout from "../../components/layout/AdminLayout.vue";
export default {
  name: "ProductsDetail",
  components: { AdminLayout, BreadCrumbsAdmin, MainProDetail },
};
</script>

<style scoped></style>
