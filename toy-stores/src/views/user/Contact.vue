<template>
  <div>
    <user-layout>
      <bread-crumbs :title="'Contact'" />
      <contact />
    </user-layout>
     
  </div>
</template>

<script>
import BreadCrumbs from '../../components/common/BreadCrumbs.vue'
import Contact from '../../components/contact/Contact.vue'
import UserLayout from "../../components/layout/UserLayout.vue";
export default {
  components: { UserLayout, BreadCrumbs, Contact },

}
</script>

<style>

</style>