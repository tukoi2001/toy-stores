<template>
  <div>
      <admin-layout>
          <bread-crumbs-admin :title="'Contact Management'"/>
           <main-contact/>
      </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from '../../components/admin/BreadCrumbsAdmin.vue'
import MainContact from '../../components/admin/contacts/MainContact.vue'
import AdminLayout from '../../components/layout/AdminLayout.vue'
export default {
  components: { AdminLayout, BreadCrumbsAdmin, MainContact },
    name: 'Contact'
}
</script>

<style scoped>

</style>