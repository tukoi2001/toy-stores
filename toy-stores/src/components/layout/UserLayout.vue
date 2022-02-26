<template>
  <div>
<!-- Header  chua cat-->
<slot> </slot>
<the-footer />
<the-last-footer />

  </div>
</template>

<script>
import TheFooter from '../common/TheFooter.vue'
import TheLastFooter from '../common/TheLastFooter.vue'
export default {
  components: { TheFooter, TheLastFooter },
name: 'UserLayout'
}
</script>

<style>

</style>