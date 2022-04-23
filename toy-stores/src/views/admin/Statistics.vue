<template>
  <div>
    <admin-layout>
      <bread-crumbs-admin :title="'Statistics'" />
      <main-statistics/>
    </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from "../../components/admin/BreadCrumbsAdmin.vue";
import MainStatistics from '../../components/admin/statistics/MainStatistics.vue';
import AdminLayout from "../../components/layout/AdminLayout.vue";
export default {
  components: { AdminLayout, BreadCrumbsAdmin, MainStatistics },
  name: "Statistics",
  computed: {
    getRole() {
      return this.$store.state.role;
    }
  }
};
</script>

<style scoped></style>
