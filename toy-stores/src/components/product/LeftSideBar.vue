<template>
  <div class="inner-page-sidebar mt-4">
    <div class="single-block">
      <h3 class="sidebar-title">Categories</h3>
      <ul class="sidebar-menu--shop text-start">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideBar",
};
</script>

<style scoped src="@/assets/css/components/product/MainProduct.css"></style>
