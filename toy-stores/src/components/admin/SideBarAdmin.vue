
<template>
  <div>
    <div class="profile-sidebar">
      <div class="profile-userpic">
        <img v-if="!dataCurrentUser.photoURL"
          src="../../assets/images/user/empty.jpg"
          class="img-responsive"
          alt="img-admin"
        />
        <img
          v-else
          :src="dataCurrentUser.photoURL"
          class="img-responsive"
          alt="img-admin"
        />
      </div>
      <div class="profile-usertitle">
        <div class="profile-usertitle-name">{{ dataCurrentUser.displayName }}</div>
        <div class="profile-usertitle-status">
          <span class="indicator label-success"></span>Online
        </div>
      </div>
      <div class="clear"></div>
    </div>
    <div class="divider"></div>
    <form role="search">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Search" />
      </div>
    </form>
    <ul class="nav menu">
      <li>
        <router-link to="/dashboard"
          ><b-icon class="icon-icon" icon="card-list"></b-icon> Dashboard</router-link
        >
      </li>
      <li  v-if="role == 'admin' || role == 'super admin'">
        <router-link to="/dashboard/users"
          ><b-icon class="icon-icon" icon="people-fill"></b-icon> Users</router-link 
        >
      </li>
      <li>
        <router-link to="/dashboard/products"
          ><b-icon class="icon-icon" icon="card-list"></b-icon> Products</router-link
        >
      </li>
      <li>
        <router-link to="/dashboard/categories"
          ><b-icon class="icon-icon" icon="tags-fill"></b-icon> Categories</router-link
        >
      </li>
      <li v-if="role == 'admin' || role == 'super admin'">
        <router-link to="/dashboard/orders"
          ><b-icon class="icon-icon" icon="basket-fill"></b-icon> Orders</router-link
        >
      </li>
      <li>
        <a href=""
          ><b-icon class="icon-icon" icon="chat-square-dots-fill"></b-icon>
          Blogs and Comments</a
        >
      </li>
      <li>
        <a href=""
          ><b-icon class="icon-icon" icon="bar-chart-line-fill"></b-icon
          >Statistics</a
        >
      </li>
      <li>
        <router-link to="/logout"
          ><b-icon class="icon-icon" icon="box-arrow-in-right"></b-icon>
          Logout</router-link
        >
      </li>
    </ul>
  </div>  
</template>

<script>
import { mapState } from "vuex";

export default {
    name: 'SideBarAdmin',
    computed: {
    ...mapState("users", ["userInformation"]),
    ...mapState(['role']),
    dataCurrentUser() {
      return this.userInformation.multiFactor.user;
    },
  },
  mounted() {
    console.log(this.role);
  }
}
</script>

<style scoped src="@/assets/css/components/admin/Admin.css">

</style>