<template>
  <div class="home">
    <the-header />
    <the-footer />
    <the-last-footer />
  </div>
</template>

<script>
import TheFooter from "../components/common/TheFooter.vue";
import TheHeader from "../components/common/TheHeader.vue";
import TheLastFooter from '../components/common/TheLastFooter.vue';

export default {
  name: "Home",
  components: {
    TheHeader,
    TheFooter,
    TheLastFooter,
  },
};
</script>
<style>

</style>