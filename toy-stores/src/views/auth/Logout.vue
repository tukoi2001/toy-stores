<template>
  <div class="wrapper">
      <h2>Do you want to sign out?</h2>
      <div class="button__link">
        <button @click="onSignOut" type="button" class="btn btn-primary">Logout</button>
        <button type="button" class="btn btn-primary"><router-link class="link" to="/">Cancel</router-link></button>
      </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { AuthService } from "../../services/AuthService";
export default {
    name: 'Logout',
    methods: {
      ...mapMutations('cart', ['removeAllItems']),
      ...mapMutations('wishlist', ['removeAllItemsWishlist']),
    async onSignOut() {
      this.removeAllItems();
      this.removeAllItemsWishlist();
      const response = await AuthService.signOut();
      if (response === true) {
        localStorage.setItem("token", '');
        localStorage.setItem("uid", '')
        this.$store.dispatch('actionSetToken', '');
        this.$router.push('/');
      }
    },
  },
}
</script>

<style scoped>
.wrapper {
 padding: 50px 200px;
}
.button__link {
  padding: 40px 0;
}
.link {
  text-decoration: none;
  color: #FFF!important;
  font-size: 1.3rem!important;
}
.btn-primary:last-child {
  margin-left: 30px;
}
.wrapper h2 {
  font-size: 2.5rem;
}
.btn-primary {
  padding: 15px 30px;
}
.btn-primary, .link {
  background-color: #00c4cc;
  font-size: 1.3rem;
  border-color: #00c4cc;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}
.btn-primary:hover, .link:hover {
  opacity: 0.8;
}
</style>