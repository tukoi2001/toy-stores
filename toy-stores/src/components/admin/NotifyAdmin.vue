<template>
  <div class="">
    <div class="offcanvas-overlay" @click.stop="hideShowNotifies"></div>
    <ul class="dropdown-menu dropdown-messages">
      <li v-for="(item, index) in notifies" :key="index">
        <div class="dropdown-messages-box">
            <img
              alt="image"
              class="img-circle"
              :src="item.urlImageUser"
            />
          <div class="message-body">
            <a href="#"
              ><strong>{{ item.user }}</strong>  <strong>{{  item.title }}.</strong>
            </a
            >
            <br /><small class="text-muted">{{ item.created_At }}</small>
          </div>
        </div>
      </li>
      <li>
        <div class="all-button">
          <a href="" @click.prevent="toNotify">
            <strong>All Notifications</strong>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "NotifyAdmin",
  methods: {
    hideShowNotifies() {
      this.$emit("myNotifies");
    },
    toNotify() {
      this.$router.push('/dashboard/notification');
    }
  },
  computed: {
    ...mapState('notify', ['notifies'])
  }
};
</script>

<style scoped src="@/assets/css/components/admin/Admin.css"></style>
