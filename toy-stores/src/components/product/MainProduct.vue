<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3 mt--40 mt-lg--0">
        <left-side-bar>
          <li>
            <a
              href=""
              @click.prevent="getAllDataCategories"
              :class="{ active: active === 0 }"
              >Tất cả</a
            >
          </li>
          <li v-for="(item, index) in listCategories" :key="index">
            <a
              href=""
              @click.prevent="getProductByCategory(index + 1, item.name, item.slug)"
              :class="{ active: active === index + 1 }"
              >{{ item.name }}</a
            >
          </li>
        </left-side-bar>
      </div>
      <div class="col-lg-9">
        <product-top-bar>
          <template v-slot:button>
            <a
              href=""
              @click.prevent="currentTab = 'grid-product'"
              class="sorting-btn"
              data-target="grid"
              :class="{ active: currentTab === 'grid-product' }"
              ><b-icon class="sorting-icon" icon="grid-3x3-gap-fill"></b-icon
            ></a>
            <a
              href=""
              @click.prevent="currentTab = 'list-product'"
              class="sorting-btn small"
              :class="{ active: currentTab === 'list-product' }"
              ><b-icon class="sorting-icon large" icon="list-task"></b-icon
            ></a>
          </template>
          <template v-slot:show>
            <span class="toolbar-status"> Showing 1 to {{ listTotalProducts.length }} of {{ listTotalProducts.length }} (1 Pages) </span>
          </template>
          <template v-slot:sort>
            <select
              class="form-control nice-select sort-select mr-0 wide"
              @change="filteredProduct"
              v-model="sortBy"
            >
              <option value="0" selected="selected">Default Sorting</option>
              <option value="1">Sort By:Name (A - Z)</option>
              <option value="2">Sort By:Name (Z - A)</option>
              <option value="3">Sort By:Price (Low &gt; High)</option> 
              <option value="4">Sort By:Price (High &gt; Low)</option>
            </select> 
          </template>
        </product-top-bar>
        <transition name="fade">
          <component :is="currentTab" :listProducts="listTotalProducts"></component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import GridProduct from "./GridProduct.vue";
import LeftSideBar from "./LeftSideBar.vue";
import ListProduct from "./ListProduct.vue";
import ProductTopBar from "./ProductTopBar.vue";
import { ProductService } from '../../services/ProductService';
export default {
  components: {
    LeftSideBar,
    ProductTopBar,
    ListProduct,
    GridProduct,
  },
  name: "MainProduct",
  data() {
    return {
      currentTab: "grid-product",
      sortBy: 0,
      active: 0,
      listTotalProducts: []
    };
  },
  computed: {
    ...mapState("categories", ["listCategories"]),
  },
  methods: {
    getAllDataCategories() {
      this.getDataProduct();
      this.active = 0;
      const all = 'tat-ca-san-pham'
      this.$router.push(`/categories/${all}`);
    },
    getProductByCategory(index, category, id) {
      this.active = index;
      this.getDataProductByCategory(category);
      this.$router.push(`/categories/${id}`);
    },

    filteredProduct() {
      const sortBy = this.sortBy;
      return this.listTotalProducts.sort((a, b) => {
        if (sortBy === "4") {
          return b.price - a.price;
        } else if (sortBy === "3") {
          return a.price - b.price;
        } else if (sortBy === "1") {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        } else if (sortBy === "2") {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        }
      });
    },
    async getDataProduct() {
      const res = await ProductService.show();
      const newRes = res.docs.map((item, index) => {
        return {
          id: item.id,
          index: index,
          ...item.data(),
        };
      });
      this.listTotalProducts = newRes;
    },
    async getDataProductByCategory(category) {
      const res = await ProductService.show();
      const newRes = res.docs.map((item, index) => {
        return {
          id: item.id,
          index: index,
          ...item.data(),
        };
      });
      const newData = newRes.filter((item) => item.category === category);
      this.listTotalProducts = newData;
    }
  },
  mounted() {
    this.getDataProduct();
  }
};
</script>

<style scoped src="@/assets/css/components/product/MainProduct.css"></style>
