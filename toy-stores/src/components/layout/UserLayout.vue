<template>
  <div>
    <the-header/>
    <bread-crumbs :title="'My Account Page'"/>
    <slot> </slot>
    <the-footer />
    <the-last-footer />
  </div>
</template>

<script>
import BreadCrumbs from '../common/BreadCrumbs.vue'
import TheFooter from '../common/TheFooter.vue'
import TheHeader from '../common/TheHeader.vue'
import TheLastFooter from '../common/TheLastFooter.vue'
export default {
  components: { TheFooter, TheLastFooter, TheHeader, BreadCrumbs },
name: 'UserLayout'
}
</script>

<style>

</style>