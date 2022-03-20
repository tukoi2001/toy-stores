<template>
  <div class="top">
    <nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="" @click.prevent="backToHome"
            ><span>Toyqo</span>Admin</a
          >
          <ul class="nav navbar-top-links navbar-right">
            <li class="dropdown">
              <a class="dropdown-toggle count-info" href="" @click.prevent="isShowNotifies = true">
                <b-icon icon="bell-fill"></b-icon
                ><span class="label label-info">5</span>              
              </a>
              <transition name="fade">
                  <notify-admin @myNotifies="hideShowNotifies"  v-if="isShowNotifies"/>
                </transition>
            </li>
            <li class="dropdown">
              <a class="admin-img" @click.prevent="isShowSettings = true">
                <img
                  v-if="!dataCurrentUser.photoURL"
                  class="img-admin"
                  src="../../assets/images/user/empty.jpg"
                  alt="img-admin"
                />
                <img
                  v-else
                  class="img-admin"
                  :src="dataCurrentUser.photoURL"
                  alt="img-admin"
                />
              </a>
              <transition name="fade">
                <setting-admin @mySetting="hideShowSettings" v-if="isShowSettings"/>
              </transition>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import NotifyAdmin from './NotifyAdmin.vue';
import SettingAdmin from './SettingAdmin.vue';
import { mapState } from "vuex";

export default {
  components: { SettingAdmin, NotifyAdmin },
  name: "HeaderAdmin",
  data() {
    return {
      isShowSettings: false,
      isShowNotifies: false,
    }
  },
   computed: {
    ...mapState("users", ["userInformation"]),
    dataCurrentUser() {
      return this.userInformation.multiFactor.user;
    },
  },
  methods: {
    backToHome() {
      this.$router.push("/dashboard");
    },
    hideShowSettings() {
      this.isShowSettings = false;
    },
    hideShowNotifies() {
      this.isShowNotifies = false;
    }
  },
};
</script>

<style scoped src="@/assets/css/components/admin/Admin.css"></style>
