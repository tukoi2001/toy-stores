<template>
  <div>
      <h2>Bạn có muốn đăng xuất không?</h2>
      <button @click="onSignOut" type="button" class="btn btn-primary">Logout</button>
      <button type="button" class="btn btn-primary"><router-link to="/">Cancel</router-link></button>
  </div>
</template>

<script>
import SignOutAccount from '../../services/SignOutAccount'
export default {
    name: 'Logout',
    methods: {
    async onSignOut() {
      const response = await SignOutAccount.signOut();
      if (response) {
          console.log('Oke');
      }
    },
  },
}
</script>

<style scoped>

</style>