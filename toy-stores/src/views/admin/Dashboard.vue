<template>
  <div>
      <admin-layout>
          <bread-crumbs-admin :title="'Dashboard'"/>
          <dashboard-header/>
      </admin-layout>
  </div>
</template>

<script>
import BreadCrumbsAdmin from '../../components/admin/BreadCrumbsAdmin.vue'
import DashboardHeader from '../../components/admin/dashboard/DashboardHeader.vue'
import AdminLayout from '../../components/layout/AdminLayout.vue'
import { mapActions } from 'vuex';
export default {
  components: { AdminLayout, BreadCrumbsAdmin, DashboardHeader },
    name: 'DashBoard',
    methods: {
        ...mapActions('notify', ['actionSetNotifications'])
    },
    mounted() {
        setInterval(() => {
            this.actionSetNotifications();
        }, 3000)
    }
}
</script>

<style scoped>

</style>