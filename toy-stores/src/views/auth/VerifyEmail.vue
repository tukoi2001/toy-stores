<template>
  <div>
      <auth-layout>
          <div class="wrapper">
             <bread-crumbs :title="'Verify Email'"/>
            <h2 class="verify__tittle">
                Please check your email address <span class="verify__des">{{ email }}</span> to verify your account!
            </h2>
            <router-link to="/login" class="verify__btn">Back To Login</router-link>
          </div>
      </auth-layout>
  </div>
</template>

<script>
import BreadCrumbs from '../../components/common/BreadCrumbs.vue';
import AuthLayout from '../../components/layout/AuthLayout.vue';
import { mapState } from 'vuex'
export default {
    components: { AuthLayout, BreadCrumbs },
    name: 'VerifyEmail',
    computed: { 
        ...mapState('verifyEmail', ['email'])
    }
}
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: calc(100vh - (138.5px));
    background-color: #fcfcfc;
}
.breadcrumb-box {
    margin: 0 0 40px 0!important;
}
.verify__tittle {
    font-size: 28px;
}
.verify__des {
    font-weight: bold;
    font-size: 28px!important;
}
.verify__btn {
    text-decoration: none;
    background-color: #00c4cc;
    color: #fff;
    font-weight: bold;
    padding: 15px 30px;
    border-radius: 5px;
    display: block;
    font-size: 1.1rem;
    width: 180px;
    margin: 40px auto;
    transition: all 0.3s ease-in-out;
    border: 1px solid #00c4cc;
}
.verify__btn:hover {
    background-color: #fff;
    border-color: #00c4cc;
    color: #333;
}
</style>