<template>
  <div>
    <user-layout>
      <b-container>
        <b-row>
          <b-col lg="12">
            <div class="myaccount-page-wrapper">
              <b-row>
                <b-col lg="3" md="4">
                  <div class="myaccount-tab-menu nav" role="tablist">
                    <ul>
                      <li v-for="(item, index) in tabs" :key="index">
                        <a @click="changeTab"
                          ><i><b-icon :icon="item.icon" /></i
                          >{{ item.title }}</a
                        >
                      </li>
                      <li>
                        <router-link to="/"
                          ><i><b-icon icon="box-arrow-right"></b-icon></i
                          >Logout</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </b-col>
                <b-col lg="9" md="8">
                  <keep-alive>
                    <component :is="currentTab"> </component>
                  </keep-alive>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </user-layout>
  </div>
</template>

<script>
import UserLayout from "../../components/layout/UserLayout.vue";
import AccountDetails from "../user/Tabs/AccountDetails.vue"
import ChangePassword from "../user/Tabs/ChangePassword.vue"
import Dashboard from "../user/Tabs/Dashboard.vue"
import Orders from "../user/Tabs/Orders.vue"
export default {
  components: { UserLayout, AccountDetails, ChangePassword, Dashboard, Orders },
  name: "Me",
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
    }
  },
  methods: {
    changeTab() {
      if (this.currentTab === Dashboard) {
        this.currentTab = AccountDetails;
      } else {
        this.currentTab = Dashboard;
      }
    },
  },
};
</script>

<style scoped src="@/assets/css/components/user/Me.css">
</style>