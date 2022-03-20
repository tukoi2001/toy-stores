<template>
  <div>
    <div class="offcanvas-overlay" @click.stop="hideShowAccount"></div>
    <div class="nav__item">
      <ul>
        <template v-if="token && token !== null">
          <li>
            <h3>Xin chào <strong>{{ userInformation.multiFactor.user.displayName }}</strong></h3>
          </li>
          <li>
            <router-link class="nav__link" to="/me"
              ><b-icon class="icon__link" icon="person"></b-icon>Tài
              Khoản</router-link
            >
          </li>
          <li>
            <router-link class="nav__link" to="/logout"
              ><b-icon class="icon__link" icon="box-arrow-right"></b-icon>Đăng
              xuất</router-link
            >
          </li>
           <li v-if="getRole === 'admin' || getRole === 'supplier' || getRole === 'super admin'">
            <router-link class="nav__link" to="/dashboard"
              ><b-icon class="icon__link" icon="folder"></b-icon>Dashboard</router-link
            >
          </li>
        </template>

        <template v-else>
          <li>
            <router-link class="nav__link" to="/login"
              ><b-icon class="icon__link" icon="box-arrow-in-left"></b-icon>Đăng
              Nhập</router-link
            >
          </li>
          <li>
            <router-link class="nav__link" to="/register"
              ><b-icon class="icon__link" icon="person-plus"></b-icon>Đăng
              Ký</router-link
            >
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "AccountTab",
  computed: {
    token() {
      return this.$store.state.token;
    },
    ...mapState('users', ['userInformation']),
    getRole() {
      return this.$store.state.role;
    }
  },
  methods: {
    hideShowAccount() {
      this.$emit("myAccount");
    },
  },
};
</script>

<style scoped>
.nav__item {
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 93px;
  left: auto;
  right: 207px;
  padding: 10px 20px;
  z-index: 99;
  background-color: #ffffff;
  border: 1px solid #ccc;
  box-shadow: 1px 2px 5px rgb(0 0 0 / 50%);
}
.nav__item:before {
  content: "";
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 20px solid #f2f2f2;
  position: absolute;
  top: -20px;
  bottom: auto;
  left: 56px;
  right: auto;
  z-index: -1;
}
.nav__item h3 {
  font-size: 1.4rem;
  margin: 0;
  line-height: 1.75;
}

.nav__item h3 strong {
  color: #00c4cc;
  display: block;
  font-size: 1.4rem;
  line-height: 1.75;
}

.nav__item ul {
  padding: 0;
  margin: 0;
  width: 130px;
  text-align: left;
}
.nav__item a {
  text-decoration: none;
  font-size: 1.2rem;
  color: #000;
  line-height: 1.5;
  transition: all 0.3s ease-in-out;
}
.nav__item li {
  padding: 10px 0;
}
.nav__ul {
  margin: 0;
}
.icon__link {
  margin-right: 10px;
}
.nav__link:hover {
  color: #00c4cc;
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
}
</style>
