<template>
  <div>
    <admin-layout>
      <bread-crumbs-admin :title="'Blogs Management'" />
      <main-blog/>
    </admin-layout>
  </div>
</template>

<script>
import MainBlog from '../../components/admin/blogs/MainBlog.vue';
import BreadCrumbsAdmin from "../../components/admin/BreadCrumbsAdmin.vue";
import AdminLayout from "../../components/layout/AdminLayout.vue";
export default {
  components: { AdminLayout, BreadCrumbsAdmin, MainBlog },
  name: "Orders",
};
</script>

<style scoped></style>
