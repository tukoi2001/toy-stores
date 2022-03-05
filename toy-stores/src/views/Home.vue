<template>
  <div>
   <user-layout>
     <slider />
   </user-layout>
  </div>
</template>

<script>
import Slider from '../components/home/slider/Slider.vue'
import UserLayout from '../components/layout/UserLayout.vue'
export default {
  name: 'Home',
  components: { UserLayout, Slider },

}
</script>

<style scoped>

</style>