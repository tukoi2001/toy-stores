<template>
  <div class="product-list">
    <b-container>
      <div class="product-list__tab-menu">
        <ul>
          <li v-for="(item, index) in tabs" :key="index">
            <a
              @click="selected = item.tab"
              :class="['tab-btn', { active: selected === item.tab }]"
              >{{ item.title }}</a
            >
          </li>
        </ul>
      </div>
      <b-row>
        <b-col>
          <div class="tab-content">
            <div class="product-list__content">
              <keep-alive>
                <component :is="selected"> </component>
              </keep-alive>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BestSellerProduct from "./BestSellerProduct.vue"
import OnSaleProduct from "./OnSaleProduct.vue"
export default {
  name: "ProductList",
  components: { BestSellerProduct, OnSaleProduct },
  data() {
    return {
      selected: "BestSellerProduct",
      tabs: [
        {
          title: "Best Seller Product",
          tab: "BestSellerProduct",
        },
        {
          title: "On-Sale Product",
          tab: "OnSaleProduct",
        },
      ],
    };
  },
};
</script>

<style>
</style>