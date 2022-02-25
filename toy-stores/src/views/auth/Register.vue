<template>
  <div>
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <form class="login100-form validate-form">
            <span class="login100-form-title"> Register </span>

          <div
              class="wrap-input100 validate-input"
              data-validate="Fullname is required"
            >
              <input
                class="input100"
                type="text"
                name="fullname"
                placeholder="Full name"
              />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <b-icon-person-fill></b-icon-person-fill>
              </span>
            </div>

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

            <div
              class="wrap-input100 validate-input"
              data-validate="Repeat password is required"
            >
              <input
                class="input100"
                type="password"
                name="pass"
                placeholder="Repeat your password"
              />
              <span class="focus-input100"></span>
              <span class="symbol-input100">
                <b-icon-arrow-repeat></b-icon-arrow-repeat>
              </span>
            </div>

            <div
              class="custom-control custom-checkbox validate-input pt-3"
              data-validate=""
            >
              <input
                class=""
                type="checkbox"
                id="rememberMe-2"
              />
              <span>I agree all statements in Terms of Conditions</span>
            </div>

            <div class="container-login100-form-btn">
              <button class="login100-form-btn">Register</button>
            </div>

            <div class="text-center pt-5">
              <router-link class="txt2" to="/login">
                Already have an account?
                <b-icon-arrow-right></b-icon-arrow-right>
              </router-link>
            </div>
          </form>
          <div class="login100-pic js-tilt" data-tilt>
            <img src="@/assets/images/logo/logo.png" alt="IMG" />
            <span>Today children, tomorrow the world.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style scoped src="@/assets/css/components/login/Login.css">

</style>