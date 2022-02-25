<template>
  <div>
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <div class="login100-pic js-tilt" data-tilt>
            <img src="@/assets/images/logo/logo.png" alt="IMG" />
            <span>Today children, tomorrow the world.</span>
          </div>

          <form class="login100-form validate-form">
            <span class="login100-form-title"> Login </span>

            <div
              class="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                class="input100"
                type="text"
                name="email"
                placeholder="Email"
              />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <b-icon-envelope-fill></b-icon-envelope-fill>
              </span>
            </div>

            <div
              class="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                class="input100"
                type="password"
                name="pass"
                placeholder="Password"
              />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <b-icon-lock-fill></b-icon-lock-fill>
              </span>
            </div>

            <div class="container-login100-form-btn">
              <button class="login100-form-btn">Login</button>
            </div>

            <div class="container-google100-form-btn">
              <button class="google100-form-btn">
                <b-icon-google class="icon-google"></b-icon-google>
                Google
                </button>
            </div>

            <div class="row-forgot text-center">
              <span class="txt1"> Forgot </span>
              <a class="txt2" href="#"> Username / Password? </a>
            </div>

            <div class="row-create-account text-center">
              <router-link class="txt2" to="/register">
                Create your Account
                <b-icon-arrow-right></b-icon-arrow-right>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped src="@/assets/css/components/login/Login.css">
</style>