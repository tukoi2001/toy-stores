<template>
  <div>
    <admin-layout>
      <bread-crumbs-admin :title="'Statistics'" />

    </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from "../../components/admin/BreadCrumbsAdmin.vue";
import AdminLayout from "../../components/layout/AdminLayout.vue";
export default {
  components: { AdminLayout, BreadCrumbsAdmin },
  name: "Statistics",
};
</script>

<style scoped></style>
