<template>
  <div class="home">
    <the-header />
    <the-footer />
    <the-last-footer />
    <bread-crumbs  :title="'Home'"/>
  </div>
</template>

<script>
import BreadCrumbs from '../components/common/BreadCrumbs.vue';
import TheFooter from "../components/common/TheFooter.vue";
import TheHeader from "../components/common/TheHeader.vue";
import TheLastFooter from '../components/common/TheLastFooter.vue';

export default {
  name: "Home",
  components: {
    TheHeader,
    TheFooter,
    TheLastFooter,
    BreadCrumbs,
  },
};
</script>
<style>

</style>