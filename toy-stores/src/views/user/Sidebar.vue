<template>
<div class="myaccount-tab-menu nav" role="tablist">
    <ul>
      <li v-for="(item, index) in tabs" :key="index">
        <a
          ><i><b-icon :icon="item.icon" /></i>{{ item.title }}</a
        >
      </li>
      <li>
        <router-link to="/"
          ><i><b-icon icon="box-arrow-right"></b-icon></i>Logout</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      tabs: [
        {
          icon: "building",
          title: "Dashboard",
          tabs: "dash-board",
        },
        {
          icon: "cart-plus-fill",
          title: "Orders",
          tabs: "orders",
        },
        {
          icon: "person-fill",
          title: "Account Details",
          tabs: "",
        },
        {
          icon: "key-fill",
          title: "Change Password",
          tabs: "",
        },
      ],
    };
  },
};
</script>

<style scoped src="@/assets/css/components/user/Sidebar.css">
</style>