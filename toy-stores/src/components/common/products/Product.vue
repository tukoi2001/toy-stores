<template>
  <div class="product mb-4">
    <div class="thumb">
      <router-link :to="link" class="image">
        <img class="fit-image" :src="image" alt="Product" />
      </router-link>
      <span class="badges">
        <span :class="status" v-if="status == 'sale'">{{ sale }}</span>
        <span :class="status" v-else>{{ status }}</span>
      </span>
      <div class="actions">
        <a href="wishlist.html" class="action wishlist"
          ><b-icon icon="heart"></b-icon>
        </a>
        <a href="compare.html" class="action compare"
          ><b-icon icon="arrow-repeat"></b-icon>
        </a>
        <a href="#" class="action quickview"><b-icon icon="search"></b-icon></a>
      </div>
      <div class="add-cart-btn">
        <button
          class="btn btn-whited btn-hover-primary text-capitalize add-to-cart"
        >
          Add To Cart
        </button>
      </div>
    </div>
    <div class="content">
      <h5 class="title">
        <router-link :to="link">{{ title }}</router-link>
      </h5>
      <span class="price">
        <span class="new"> ${{ newPrice }} </span>
        <span class="old">${{ oldPrice }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    link: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },
    sale: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    newPrice: {
      type: String,
      default: "",
    },
    oldPrice: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped src="@/assets/css/components/common/product.css">
</style>