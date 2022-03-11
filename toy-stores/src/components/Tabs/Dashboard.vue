<template>
  <div>
    <h3 class="title">Dashboard</h3>
    <div class="welcome">
      <p>
        Hello,
        <strong>{{ userInformation.multiFactor.user.displayName }}</strong>
        (if not
        <strong>{{ userInformation.multiFactor.user.displayName  }} !</strong>
        Please
        <router-link class="logout" to="/logout"> <b> Logout</b></router-link
        >)
      </p>
      <p>
        From your account dashboard. you can easily check & view your recent
        orders, manage your shipping and billing addresses and edit your
        password and account details.
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Dashboard",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState('users', ['userInformation'])
  }
};
</script>

<style scoped src="@/assets/css/components/user/tabs/tabs.css"></style>
