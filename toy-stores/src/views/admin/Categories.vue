<template>
  <div>
      <admin-layout>
          <bread-crumbs-admin :title="'Categories Management'"/>
          <main-categories/>       
      </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from '../../components/admin/BreadCrumbsAdmin.vue'
import MainCategories from '../../components/admin/categories/MainCategories.vue'
import AdminLayout from '../../components/layout/AdminLayout.vue'
export default {
  components: { AdminLayout, BreadCrumbsAdmin, MainCategories },
    name: 'Categories'
}
</script>

<style scoped>

</style>