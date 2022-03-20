<template>
  <div class="product mb-4">
    <div class="thumb">
      <slot name="image"></slot>
      <span class="badges">
        <span class="status">New</span>
      </span>
      <div class="actions">
        <slot name="action"></slot>
      </div>
      <div class="add-cart-btn">
        <slot name="add-item"></slot>
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      id: ''
    }
  },
  props: {
  
  },
  methods: {
    
  }
};
</script>

<style scoped src="@/assets/css/components/common/product.css"></style>
