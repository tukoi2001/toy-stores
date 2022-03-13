<template>
  <div>
    <the-header/>
    <slot> </slot>
    <scroll-top-arrow/>
    <the-footer />
    <the-last-footer />
  </div>
</template>

<script>
import ScrollTopArrow from '../common/ScrollTopArrow.vue'
import TheFooter from '../common/TheFooter.vue'
import TheHeader from '../common/TheHeader.vue'
import TheLastFooter from '../common/TheLastFooter.vue'
export default {
  components: { TheFooter, TheLastFooter, TheHeader, ScrollTopArrow },
name: 'UserLayout'
}
</script>

<style>

</style>