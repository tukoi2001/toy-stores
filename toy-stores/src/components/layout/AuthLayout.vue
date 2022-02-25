<template>
  <div>
      <the-header />
      <slot></slot>
  </div>
</template>

<script>
import TheHeader from '../common/TheHeader.vue'
export default {
  components: { TheHeader },
    name:"AuthLayout"
}
</script>

<style>

</style>