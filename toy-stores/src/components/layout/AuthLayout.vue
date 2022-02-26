<template>
  <div>
      <the-au-header/>
      <slot></slot>
      <the-last-footer/>
  </div>
</template>

<script>

import TheAuHeader from '../common/TheAuHeader.vue'
import TheLastFooter from '../common/TheLastFooter.vue'
export default {
  components: { TheLastFooter, TheAuHeader },
    name:"AuthLayout"
}
</script>

<style>

</style>