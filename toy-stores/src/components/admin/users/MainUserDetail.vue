<template>
  <div class="row text-start box-detail">
      <h2 class="title-detail-user">User Details</h2>
      <div class="col-md-6">
          <ul class="list">
              <li class="list-item">
                  ID: <span class="list-item-des">{{userDetail.id}}</span>
              </li>
              <li class="list-item mt-4">
                  Name: <span class="list-item-des">{{userDetail.name}}</span>
              </li>
              <li class="list-item mt-4">
                  Email: <span class="list-item-des">{{userDetail.email}}</span>
              </li>
              <li class="list-item mt-4">
                  City: <span class="list-item-des">{{userDetail.address.city}}</span>
              </li>
              <li class="list-item mt-4">
                  Ward: <span class="list-item-des">{{userDetail.address.ward}}</span>
              </li>
              <li class="list-item mt-4">
                  Account Status: <span class="list-item-des">{{userDetail.isActive}}</span>
              </li>
              <li class="list-item mt-4">
                  Created At: <span class="list-item-des">{{userDetail.created_at}}</span>
              </li>
          </ul>
      </div>
       <div class="col-md-6">
          <ul class="list">
              <li class="list-item">
                  No: <span class="list-item-des">{{userDetail.index}}</span>
              </li>
              <li class="list-item mt-4">
                  Role: <span class="list-item-des">{{userDetail.role}}</span>
              </li>
              <li class="list-item mt-4">
                  Phone Number: <span class="list-item-des">{{userDetail.phoneNumber}}</span>
              </li>
              <li class="list-item mt-4">
                  District: <span class="list-item-des">{{userDetail.address.district}}</span>
              </li>
              <li class="list-item mt-4">
                  Street: <span class="list-item-des">{{userDetail.address.street}}</span>
              </li>
              <li class="list-item mt-4">
                  Note: <span class="list-item-des">{{userDetail.customField}}</span>
              </li>
              <li class="list-item mt-4">
                  Updated At: <span class="list-item-des">{{userDetail.updated_at}}</span>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'MainUserDetail',
    computed: {
        ...mapState('users', ['userDetail'])
    }
}
</script>

<style scoped>
.box-detail {
    margin-bottom: 90px;
}
.title-detail-user {
    font-size: 2rem;
    text-transform: uppercase;
    margin: 40px 0px;
    padding: 0 50px;
    font-weight: bold;
}
.list {
    padding: 0 40px!important;
}
.list-item {
    font-size: 1.1rem;
    font-weight: 500;
}
.list-item-des {
    font-size: 1.2rem;
    font-weight: 600;
    color: #000;
}
</style>