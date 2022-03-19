<template>
  <div>
    <admin-layout>
      <bread-crumbs-admin :title="'Users Management'" />
      <main-users/>
    </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from "../../components/admin/BreadCrumbsAdmin.vue";
import MainUsers from '../../components/admin/users/MainUsers.vue';
import AdminLayout from "../../components/layout/AdminLayout.vue";
export default {
  components: { AdminLayout, BreadCrumbsAdmin, MainUsers },
  name: "Users",
};
</script>

<style scoped></style>
