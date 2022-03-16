<template>
  <div class="product mb-4">
    <div class="thumb">
      <slot name="image"></slot>
      <span class="badges">
        <span class="status">New</span>
      </span>
      <div class="actions">
        <a href="" class="action wishlist"><b-icon icon="heart"></b-icon> </a>
        <a href="" class="action compare"
          ><b-icon icon="arrow-repeat"></b-icon>
        </a>
        <a href="#" class="action quickview"><b-icon icon="search"></b-icon></a>
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
