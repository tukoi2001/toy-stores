<template>
  <div>
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">Dashboard</h1>
      </div>
    </div>
    <div class="panel panel-container">
      <div class="row">
        <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
          <div class="panel panel-teal panel-widget border-right">
            <div class="row no-padding">
              <b-icon icon="cart-check-fill" class="color-blue icon-dashboard"></b-icon>
              <div class="large">{{ numOfOrders }}</div>
              <div class="text-muted">New Orders</div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
          <div class="panel panel-blue panel-widget border-right">
            <div class="row no-padding">
              <b-icon icon="chat-dots-fill" class="color-orange icon-dashboard"></b-icon>
              <div class="large">{{ numOfBlogs }}</div>
              <div class="text-muted">Blogs</div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
          <div class="panel panel-orange panel-widget border-right">
            <div class="row no-padding">
              <b-icon icon="people-fill" class="color-teal icon-dashboard"></b-icon>
              <div class="large">{{ numOfUsers }}</div>
              <div class="text-muted">New Users</div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
          <div class="panel panel-red panel-widget">
            <div class="row no-padding">
              <b-icon icon="basket2-fill" class="color-red icon-dashboard"></b-icon>
              <div class="large">{{ numOfProducts }}</div>
              <div class="text-muted">Products</div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-5">
          <calendar/>
        </div>
        <div class="col-7">
          <list-tasks/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from './Calendar.vue';
import ListTasks from './ListTasks.vue';
import { MeService } from "../../../services/MeService";
import { ProductService } from "../../../services/ProductService";
import { BlogService } from "../../../services/BlogService";
import { CartService } from "../../../services/CartService";
export default {
  components: { Calendar, ListTasks },
  name: "DashboardHeader",
  data() {
    return { 
      numOfUsers: 0,
      numOfProducts: 0,
      numOfOrders: 0,
      numOfBlogs: 0,
    }
  },
  methods: {
    async showNumOfUsers() {
      const response = await MeService.showNumOfUsers();
      this.numOfUsers = response;
    },
    async showNumOfProducts() {
      const response = await ProductService.showNumOfProducts();
      this.numOfProducts = response;
    },
    async showNumOfBlogs() {
      const response = await BlogService.showNumOfBlogs();
      this.numOfBlogs = response;
    },
    async showNumOfOrders() {
      const response = await CartService.showNumOfOrders();
      this.numOfOrders = response;
    }
  },
  mounted() {
    this.showNumOfUsers();
    this.showNumOfProducts();
    this.showNumOfBlogs();
    this.showNumOfOrders();
  }
};
</script>

<style scoped src="@/assets/css/components/admin/Admin.css"></style>
