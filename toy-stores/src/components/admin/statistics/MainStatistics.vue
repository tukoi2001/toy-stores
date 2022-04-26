<template>
  <div class="wrapper">
    <h2 class="statistics_title">Statistics System</h2>
    <div class="row mx-1">
      <div class="col-md-2 statistics_wrapper-box">
        <div class="statistics-box">
          <button class="btn btn-primary" @click="isClicks = !isClicks">
            Statistics by
          </button>
          <ul class="statistics_list" v-if="isClicks">
            <li
              class="statistics_item"
              :class="{ active: currentTab == 'profit-component' }"
              @click="currentTab = 'profit-component'"
            >
              Profit
            </li>
            <li
              class="statistics_item"
              @click="currentTab = 'product-sold'"
              :class="{ active: currentTab == 'product-sold' }"
            >
              Products sold
            </li>
            <li
              class="statistics_item"
              @click="currentTab = 'customer-report'"
              :class="{ active: currentTab == 'customer-report' }"
            >
              Customers
            </li>
            <li
              class="statistics_item"
              @click="currentTab = 'default-component'"
            >
              Back
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-10 statistics_content">
        <component :is="currentTab"></component>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerReport from "./CustomerReport.vue";
import DefaultComponent from "./DefaultComponent.vue";
import ProductSold from "./ProductSold.vue";
import ProfitComponent from "./ProfitComponent.vue";
export default {
  components: {
    DefaultComponent,
    ProfitComponent,
    ProductSold,
    CustomerReport,
  },
  name: "MainStatistics",
  data() {
    return {
      isClicks: false,
      currentTab: "default-component",
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster+Two:wght@700&display=swap");
.wrapper {
  background-color: #f5f5f5;
  width: auto;
  padding: 20px;
  height: calc(100vh - 208px);
}
.statistics_wrapper-box {
  background-color: rgb(228, 225, 225);
  margin-top: 20px;
  height: calc(100vh - 323px);
  border-radius: 10px;
}
.active {
  background-color: #62ab00;
  color: #fff;
  border-color: #62ab00;
}
.statistics_title {
  margin: 0;
  font-family: "Lobster Two", cursive;
  font-size: 3.4rem;
  color: #fff;
  padding-bottom: 10px;
  background-color: #62ab00;
}
.statistics_list {
  text-align: center;
  margin-top: 20px;
}
.statistics_item {
  font-size: 1rem;
  font-weight: 600;
  border: 1px solid #62ab00;
  padding: 10px 10px;
  min-width: 130px;
  max-width: 160px;
  border-radius: 10px;
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
}
.statistics_item:not(:last-child) {
  margin-bottom: 15px;
}
.btn-primary {
  width: 100%;
  margin: 0;
  background-color: #62ab00;
  border-color: #62ab00;
  transition: all 0.3s;
}
.btn-primary:hover {
  background-color: #333;
  border-color: #333;
}
.btn-primary:focus {
  box-shadow: none;
  background-color: #62ab00;
  border-color: #62ab00;
}
.statistics-box {
  margin-top: 30px;
  border: 1px solid #ccc;
  overflow: hidden;
  border-radius: 10px;
}
</style>
