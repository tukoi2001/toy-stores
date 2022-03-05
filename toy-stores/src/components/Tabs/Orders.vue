<template>
  <div>
    <h3 class="title">Dashboard</h3>
    <div class="myaccount-table table-responsive text-center">
      <table class="table table-bordered">
        <thead class="thead-light">
          <th>Order</th>
          <th>Date</th>
          <th>Status</th>
          <th>Total</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in OrderInfo" :key="index">
            <td>{{ item.order }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.status }}</td>
            <td>${{ item.total }}</td>
            <td>
              <a
                href=""
                class="btn btn btn-dark btn-hover-primary btn-sm rounded-0"
                >View</a
              >
            </td>
          </tr>
          <tr v-if="OrderInfo.length <= 0">
            <td colspan="5" class="fw-bold text-danger">There is no item in there!</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      OrderInfo: [
        
      ],
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    order: {
      type: Number,
      default: 0,
    },
    date: {
      type: String,
      default: "",
    },
    total: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "",
    },
  },
};
</script>

<style  scoped src="@/assets/css/components/user/tabs/tabs.css">
</style>