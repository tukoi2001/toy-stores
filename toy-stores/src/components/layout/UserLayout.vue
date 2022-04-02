<template>
  <div>
    <the-header class="header__fixed shadow"/>
    <div class="main">
      <slot> </slot>
    <scroll-top-arrow/>
    <the-footer />
    <the-last-footer />
    </div>
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
.header__fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  z-index: 900;
  background-color: #FFF;
}
.main {
  margin-top: 90px!important;
}
</style>