<template>
  <div>
    <admin-layout>
      <bread-crumbs-admin :title="'Blog Detail'" />
      <main-blog-detail/>
    </admin-layout>
  </div>
</template>

<script>
import MainBlogDetail from '../../components/admin/blogs/MainBlogDetail.vue';
import BreadCrumbsAdmin from "../../components/admin/BreadCrumbsAdmin.vue";
import AdminLayout from "../../components/layout/AdminLayout.vue";
export default {
  name: "BlogsDetail",
  components: { AdminLayout, BreadCrumbsAdmin, MainBlogDetail },
};
</script>

<style scoped></style>
