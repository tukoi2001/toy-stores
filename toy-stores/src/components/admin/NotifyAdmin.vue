<template>
  <div class="">
    <div class="offcanvas-overlay" @click.stop="hideShowNotifies"></div>
    <ul class="dropdown-menu dropdown-messages">
      <li>
        <div class="dropdown-messages-box">
            <img
              alt="image"
              class="img-circle"
              src="https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg"
            />
          <div class="message-body">
            <a href="#"
              ><strong>Phong</strong> has created
              <strong>an account</strong>.</a
            >
            <br /><small class="text-muted">1:24 pm - 25/03/2015</small>
          </div>
        </div>
      </li>
      <li>
        <div class="dropdown-messages-box">
            <img
              alt="image"
              class="img-circle"
              src="https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-girl-xinh-toc-ngan-de-thuong.jpg"
            />
          <div class="message-body">
            <a href="#">New message from <strong>Phong</strong>.</a>
            <br /><small class="text-muted">12:27 pm - 25/03/2015</small>
          </div>
        </div>
      </li>
      <li>
        <div class="all-button">
          <router-link to="/dashboard/notification">
            <em class="fa fa-inbox"></em> <strong>All Notifications</strong>
          </router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NotifyAdmin",
  methods: {
    hideShowNotifies() {
      this.$emit("myNotifies");
    },
  },
};
</script>

<style scoped src="@/assets/css/components/admin/Admin.css"></style>
