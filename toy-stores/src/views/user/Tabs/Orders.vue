<template>
  <div class="myaccount-content">
      <h3 class="title">{{title}}</h3>
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
                      <td>{{item.order}}</td>
                      <td>{{item.date}}</td>
                      <td>{{item.status}}</td>
                      <td>${{item.total}}</td>
                      <td><a href="" class="btn btn btn-dark btn-hover-primary btn-sm rounded-0">View</a></td>
                  </tr>
              </tbody>
          </table>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{ 
            OrderInfo:[
                {
                    order: 1, 
                    date: "Aug 22, 2018",
                    status:"Pending",
                    total: 3000,                     
                },
                                {
                    order: 2, 
                    date: "June 12, 2019",
                    status:"Approved",
                    total: 3500,                     
                },
                                {
                    order: 3, 
                    date: "July 22, 2018",
                    status:"On Hold",
                    total: 3700,                     
                },
            ]
        }
    },
  props: {
    title: {
      type: String,
      default: "",
    },
    order: {
        type: Number,
        default: 0
    },
    date:{
        type: String,
        default: "",
    },
    total: {
        type: Number,
        default: 0
    },
    status :{
        type : String,
        default : ""
    }
  },
}
</script>

<style  scoped src="@/assets/css/components/tabs/tabs.css">

</style>