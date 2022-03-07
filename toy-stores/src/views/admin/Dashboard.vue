<template>
  <div>
      <admin-layout>
          <bread-crumbs-admin :title="'Dashboard'"/>
      </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from '../../components/admin/BreadCrumbsAdmin.vue'
import AdminLayout from '../../components/layout/AdminLayout.vue'
export default {
  components: { AdminLayout, BreadCrumbsAdmin },
    name: 'DashBoard'
}
</script>

<style scoped>

</style>