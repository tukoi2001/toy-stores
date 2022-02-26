<template>
  <div>
      <the-header />
      <slot></slot>
      <the-last-footer/>
  </div>
</template>

<script>
import TheHeader from '../common/TheHeader.vue'
import TheLastFooter from '../common/TheLastFooter.vue'
export default {
  components: { TheHeader, TheLastFooter },
    name:"AuthLayout"
}
</script>

<style>

</style>