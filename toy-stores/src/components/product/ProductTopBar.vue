<template>
  <div class="shop-toolbar with-sidebar mb--30 mt-4">
    <div class="row align-items-center">
      <div class="col-lg-2 col-md-2 col-sm-6">
        <div class="product-view-mode">
          <slot name="button"></slot>
        </div>
      </div>
      <div class="col-xl-6 col-md-5 col-sm-6 mt--10 mt-sm--0">
        <slot name="show"></slot>
      </div>
      <div
        class="col-xl-4 col-lg-5 col-md-4 col-sm-6 mt--10 mt-md--0 section_pp"
      >
        <div class="sorting-selection">
          <span>Sort By:</span>
          <slot name="sort"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductTopBar",
};
</script>

<style scoped src="@/assets/css/components/product/MainProduct.css"></style>
