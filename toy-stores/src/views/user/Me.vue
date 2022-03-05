<template>
  <div>
    <user-layout>
      <bread-crumbs :title="'My Account Page'" />
      <b-container>
        <b-row>
          <b-col lg="12">
            <div class="myaccount-page-wrapper">
              <b-row>
                <b-col lg="3" md="4">
                  <div class="myaccount-tab-menu nav" role="tablist">
                    <ul>
                      <li v-for="(item, index) in tabs" :key="index">
                        <a
                          @click="selected = item.tab"
                          :class="[
                            'tab-btn',
                            { active: selected === item.tab },
                          ]"
                          ><i><b-icon :icon="item.icon" /></i
                          >{{ item.title }}</a
                        >
                      </li>
                      <li>
                        <router-link to="/logout"
                          ><i><b-icon icon="box-arrow-right"></b-icon></i
                          >Logout</router-link
                        >
                      </li>
                    </ul>
                  </div>
                </b-col>
                <b-col lg="9" md="8">
                  <div class="tab-content">
                    <div class="myaccount-content">
                      <keep-alive>
                        <component :is="selected"> </component>
                      </keep-alive>
                    </div>
                  </div>
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
import BreadCrumbs from "../../components/common/BreadCrumbs.vue";
import UserLayout from "../../components/layout/UserLayout.vue";
import AccountDetails from "../../components/Tabs/AccountDetails.vue";
import ChangePassword from "../../components/Tabs/ChangePassword.vue";
import Dashboard from "../../components/Tabs/Dashboard.vue";
import Orders from "../../components/Tabs/Orders.vue";
export default {
  components: {
    UserLayout,
    AccountDetails,
    ChangePassword,
    Dashboard,
    Orders,
    BreadCrumbs,
  },
  name: "Me",
  data() {
    return {
      selected: "Dashboard",
      tabs: [
        {
          icon: "building",
          title: "Dashboard",
          tab: "Dashboard",
        },
        {
          icon: "cart-plus-fill",
          title: "Orders",
          tab: "Orders",
        },
        {
          icon: "person-fill",
          title: "Account Details",
          tab: "AccountDetails",
        },
        {
          icon: "key-fill",
          title: "Change Password",
          tab: "ChangePassword",
        },
      ],
    };
  },
};
</script>

<style scoped src="@/assets/css/components/user/Me.css">
</style>