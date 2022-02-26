<template>
  <div>
    <bread-crumbs :title="'My Account Page'"/>
    <slot> </slot>
    <the-footer />
    <the-last-footer />
  </div>
</template>

<script>
import BreadCrumbs from '../common/BreadCrumbs.vue'
import TheFooter from '../common/TheFooter.vue'
import TheLastFooter from '../common/TheLastFooter.vue'
export default {
  components: { TheFooter, TheLastFooter, BreadCrumbs },
name: 'UserLayout'
}
</script>

<style>

</style>