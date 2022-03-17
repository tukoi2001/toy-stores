<template>
  <div>
      <the-header />
      <bread-crumbs :title="'Contact'"/>
      <contact />
      <the-footer />
      <the-last-footer />
  </div>
</template>

<script>
import BreadCrumbs from '../../components/common/BreadCrumbs.vue'
import TheFooter from '../../components/common/TheFooter.vue'
import TheHeader from '../../components/common/TheHeader.vue'
import TheLastFooter from '../../components/common/TheLastFooter.vue'
import Contact from '../../components/contact/Contact.vue'
export default {
  components: { TheHeader, BreadCrumbs, Contact, TheFooter, TheLastFooter },

}
</script>

<style>

</style>