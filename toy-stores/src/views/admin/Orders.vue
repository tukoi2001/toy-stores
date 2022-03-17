<template>
  <div>
    <admin-layout>
      <bread-crumbs-admin :title="'Orders Management'" />
      <main-orders />
    </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from "../../components/admin/BreadCrumbsAdmin.vue";
import MainOrders from "../../components/admin/orders/MainOrders.vue";
import AdminLayout from "../../components/layout/AdminLayout.vue";
export default {
  components: { AdminLayout, BreadCrumbsAdmin, MainOrders },
  name: "Orders",
};
</script>

<style scoped></style>
