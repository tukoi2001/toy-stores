<template>
  <div>
    <user-layout>
      <b-container>
        <b-row>
          <b-col lg="12">
            <div class="myaccount-page-wrapper">
              <b-row>
                <b-col lg="3" md="4"><sidebar/></b-col>
                <b-col lg="9" md="8">
                  <keep-alive>
                    <component :is="currentTab"></component>
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
import Sidebar from './Sidebar.vue';
export default {
  components: { UserLayout, Sidebar },
  name: "Me",
};
</script>

<style scoped src="@/assets/css/components/user/Me.css">

</style>