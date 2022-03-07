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
              <div class="large">120</div>
              <div class="text-muted">New Orders</div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
          <div class="panel panel-blue panel-widget border-right">
            <div class="row no-padding">
              <b-icon icon="chat-dots-fill" class="color-orange icon-dashboard"></b-icon>
              <div class="large">52</div>
              <div class="text-muted">Comments</div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
          <div class="panel panel-orange panel-widget border-right">
            <div class="row no-padding">
              <b-icon icon="people-fill" class="color-teal icon-dashboard"></b-icon>
              <div class="large">24</div>
              <div class="text-muted">New Users</div>
            </div>
          </div>
        </div>
        <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
          <div class="panel panel-red panel-widget">
            <div class="row no-padding">
              <b-icon icon="basket2-fill" class="color-red icon-dashboard"></b-icon>
              <div class="large">25.2k</div>
              <div class="text-muted">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardHeader",
};
</script>

<style scoped src="@/assets/css/components/admin/Admin.css"></style>
