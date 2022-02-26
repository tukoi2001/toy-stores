<template>
  <div>
      <auth-layout>
          <div class="wrapper">
             <bread-crumbs :title="'Verify Email'"/>
            <h2>
                Please check your email address <strong>{{ email }}</strong> to verify your account!
            </h2>
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
</style>