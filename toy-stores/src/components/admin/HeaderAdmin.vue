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
              <a class="dropdown-toggle count-info" href="">
                <b-icon icon="bell-fill"></b-icon
                ><span class="label label-info">5</span>
                <transition name="fade"> </transition>
              </a>
            </li>
            <li class="dropdown">
              <a class="admin-img">
                <img
                  class="img-admin"
                  src="@/assets/images/user/empty.jpg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderAdmin",
  methods: {
    backToHome() {
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped src="@/assets/css/components/admin/Admin.css"></style>
