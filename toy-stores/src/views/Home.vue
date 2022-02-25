<template>
  <div class="home">
    <the-header />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '../components/common/TheFooter.vue'
// @ is an alias to /src
import TheHeader from '../components/common/TheHeader.vue'

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
