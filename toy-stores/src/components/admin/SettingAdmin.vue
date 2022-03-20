<template>
  <div class="setting">
    <div class="offcanvas-overlay" @click.stop="hideShowSettings"></div>
    <ul>
      <li>
        <router-link to="/dashboard/my-profile">
          <b-icon class="icon" icon="person-fill"></b-icon>View Profile
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/notification"> <b-icon class="icon" icon="gear-fill"></b-icon>Notifications </router-link>
      </li>
      <li>
        <router-link to="/logout" >
          <b-icon class="icon" icon="box-arrow-right"></b-icon>Logout
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SettingAdmin",
  methods: {
    hideShowSettings() {
      this.$emit("mySetting");
    },
  },
};
</script>

<style scoped>
ul {
  padding: 10px 5px;
  list-style: none;
  width: 100%;
}
li {
  padding: 7px 10px;
}
.setting {
  position: absolute;
  background-color: #fff;
  top: 55px;
  left: auto;
  z-index: 999;
  right: -50px;
  width: 150px;
  box-shadow: 1px 5px 5px #000000;
  border-radius: 5px;
  overflow: hidden;
}
.icon {
  margin-right: 10px;
}
.setting a {
    text-decoration: none;
    color: #000000;
    font-weight: 500;
}
.offcanvas-overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: transparent;
  opacity: 0.6;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}
</style>
