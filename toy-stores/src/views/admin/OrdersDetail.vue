<template>
  <div>
    <admin-layout>
      <bread-crumbs-admin :title="'Order Details'" />
      <main-order-detail />
    </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from "../../components/admin/BreadCrumbsAdmin.vue";
import MainOrderDetail from "../../components/admin/orders/MainOrderDetail.vue";
import AdminLayout from "../../components/layout/AdminLayout.vue";
export default {
  name: "OrdersDetail",
  components: { AdminLayout, BreadCrumbsAdmin, MainOrderDetail },
};
</script>

<style scoped></style>
