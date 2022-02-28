<template>
  <div>
    <the-header/>
    <slot> </slot>
    <the-footer />
    <the-last-footer />
  </div>
</template>

<script>
import TheFooter from '../common/TheFooter.vue'
import TheHeader from '../common/TheHeader.vue'
import TheLastFooter from '../common/TheLastFooter.vue'
export default {
  components: { TheFooter, TheLastFooter, TheHeader },
name: 'UserLayout'
}
</script>

<style>

</style>