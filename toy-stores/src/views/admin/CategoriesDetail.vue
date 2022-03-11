<template>
  <div>
    <admin-layout>
      <bread-crumbs-admin :title="'Category Detail'" />
      <main-cate-detail />
    </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from "../../components/admin/BreadCrumbsAdmin.vue";
import MainCateDetail from "../../components/admin/categories/MainCateDetail.vue";
import AdminLayout from "../../components/layout/AdminLayout.vue";
export default {
  name: "CategoriesDetail",
  components: { AdminLayout, BreadCrumbsAdmin, MainCateDetail },
};
</script>

<style scoped></style>
