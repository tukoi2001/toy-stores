<template>
  <div>
    <h3 class="title">Dashboard</h3>
    <div class="welcome">
      <p>
        Hello,
        <strong>User</strong>
        (if not
        <strong>User !</strong>
        Please
        <a class="logout"> <b> Logout</b></a
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
export default {
  name: "Dashboard",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped src="@/assets/css/components/user/tabs/tabs.css">
</style>