<template>
    <div class="tab-content">
      <div class="myaccount-content">
        <h3 class="title">{{title}}</h3>
        <div class="welcome">
          <p>
            "hello",
            <strong>Alex Aya</strong>
            "(if not "
            <strong>Aya !</strong>
            <a class="logout"> Logout</a>")"
          </p>
          <p>
            From your account dashboard. you can easily check & view your recent
            orders, manage your shipping and billing addresses and edit your
            password and account details.
          </p>
        </div>
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

<style scoped src="@/assets/css/components/tabs/tabs.css">

</style>