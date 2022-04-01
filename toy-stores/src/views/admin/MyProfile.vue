<template>
  <div>
      <admin-layout>
          <bread-crumbs-admin :title="'My Profile'"/>
          <div class="container text-start my-5">
              <account-details />
          </div>
      </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from '../../components/admin/BreadCrumbsAdmin.vue'
import AdminLayout from '../../components/layout/AdminLayout.vue'
import AccountDetails from '../../components/Tabs/AccountDetails.vue'
export default {
  components: { AdminLayout, BreadCrumbsAdmin, AccountDetails },
    name: 'MyProfile'
}
</script>

<style scoped>

</style>