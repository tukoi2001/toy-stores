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
              @click.prevent="
                getProductByCategory(index + 1, item.name, item.slug)
              "
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
            <span class="toolbar-status">
              Showing 1 to {{ listTotalProducts.length }} of
              {{ listTotalProducts.length }} (1 Pages)
            </span>
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
        <div class="search__result text-start">
          <h3>Kết quả tìm kiếm: {{ search }}</h3>
          <p v-if="listTotalProducts.length <= 0">
            Không tìm thấy kết quả tìm kiếm phù hợp nào cho từ khóa
            {{ search }}. Vui lòng kiểm tra lại!
          </p>
          <p v-else>Hiển thị {{ listTotalProducts.length }} kết quả tìm kiếm:</p>
        </div>
        <transition name="fade">
          <component
            :is="currentTab"
            :listProducts="listTotalProducts"
          ></component>
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
import { ProductService } from "../../services/ProductService";
export default {
  components: {
    LeftSideBar,
    ProductTopBar,
    ListProduct,
    GridProduct,
  },
  name: "MainProductSearch",
  data() {
    return {
      currentTab: "grid-product",
      sortBy: 0,
      active: -1,
      listTotalProducts: [],
    };
  },
  computed: {
    ...mapState("categories", ["listCategories"]),
    ...mapState("products", ["search"]),
  },
  methods: {
    getAllDataCategories() {
      this.getDataProduct();
      this.active = 0;
      const all = "tat-ca-san-pham";
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
    },
    xoaDau(str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
      str = str.replace(/đ/g, "d");
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
      str = str.replace(/Đ/g, "D");
      return str;
    },
    async getDataProductSearch() {
      if (this.search !== "") {
        const res = await ProductService.show();
        const newRes = res.docs.map((item, index) => {
          return {
            id: item.id,
            index: index,
            ...item.data(),
          };
        });
        let position;
        let dataSearch = [];
        newRes.forEach((item) => {
          let str = this.xoaDau(item.name.toLowerCase());
          position = str.search(this.xoaDau(this.search.toLowerCase()));
          if (position > -1) {
            dataSearch.push(item);
          }
        });
        console.log(dataSearch);
        this.listTotalProducts = dataSearch;
      }
    },
  },
  mounted() {
    this.getDataProductSearch();
  },
  watch: {
    search() {
      this.getDataProductSearch();
    }
  }
};
</script>

<style scoped src="@/assets/css/components/product/MainProduct.css"></style>
