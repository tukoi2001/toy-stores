<template>
  <div>
    <admin-layout>
      <bread-crumbs-admin :title="'User Detail'" />
      <main-user-detail/>
    </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from "../../components/admin/BreadCrumbsAdmin.vue";
import MainUserDetail from '../../components/admin/users/MainUserDetail.vue';
import AdminLayout from "../../components/layout/AdminLayout.vue";
export default {
  name: "UsersDetail",
  components: { AdminLayout, BreadCrumbsAdmin, MainUserDetail },
};
</script>

<style scoped></style>
