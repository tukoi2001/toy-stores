<template>
  <div>
      <admin-layout>
          <bread-crumbs-admin :title="'Notifications'"/>
          <main-notifies/>
      </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from '../../components/admin/BreadCrumbsAdmin.vue'
import MainNotifies from '../../components/admin/notifies/MainNotifies.vue'
import AdminLayout from '../../components/layout/AdminLayout.vue'
export default {
  components: { AdminLayout, BreadCrumbsAdmin, MainNotifies },
    name: 'Notifications'
}
</script>

<style scoped>

</style>