<template>
  <div class="container">
    <div class="row">
        <div class="col-12">
            <router-link to="/" class="link"> 
                <img src="@/assets/images/logo/logo.png" alt="logo">
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TheAuHeader'
}
</script>

<style scoped>
.link img {
    display: block;
}
</style>