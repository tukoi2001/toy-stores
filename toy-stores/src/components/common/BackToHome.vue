<template>
  <div class="wrapper">
      <router-link to="/" class="btn btn-while"><b-icon class="icon" icon="house"></b-icon>Back To Home</router-link>
  </div>
</template>

<script>
export default {
    name: 'BackToHome'
}
</script>

<style scoped>
.wrapper {
    position: fixed;
    top: 30px;
    bottom: auto;
    left: 30px;
    right: auto;
}
.icon {
    margin-right: 10px;
}
.btn-while {
    background-color: #FFF;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 5px 7px 10px rgba(0, 0, 0, 0.4);
    font-size: 14px;
    font-weight: 700;
    color: #333;
    transition: all 0.3s ease-in-out;
}
.btn-while:hover {
    color: #FFF;
    background-color: #00c4cc;
}
</style>