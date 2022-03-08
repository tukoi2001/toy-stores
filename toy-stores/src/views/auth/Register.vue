<template>
  <div>
    <div class="limiter">
      <div class="container-login100"> 
        <div class="wrap-login100">
          <form class="login100-form validate-form" @submit.prevent="register">
            <span class="login100-form-title"> Register </span>

            <div class="form__email mb-3">
              <input
                v-model.trim="userForm.fullName"
                type="text"
                placeholder="Last Name"
                class="form__email-input"
                :class="{ 'form-group--error': $v.userForm.fullName.$error }"
              />
              <span class="form__email-symbol">
                <b-icon icon="person"></b-icon>
              </span>
              <div class="error_register" v-if="!$v.userForm.fullName.required">
                Full Name is required
              </div>
            </div>

            <div class="form__email mb-3">
              <input
                v-model.trim="userForm.email"
                type="email"
                placeholder="Email"
                class="form__email-input"
                :class="{ 'form-group--error': $v.userForm.email.$error }"
              />
              <span class="form__email-symbol">
                <b-icon icon="envelope"></b-icon>
              </span>
              <div class="text-left">
                <div class="error_register" v-if="!$v.userForm.email.required">
                  Email is required
                </div>
                <div class="error_register" v-if="!$v.userForm.email.email">
                  Email must be valid
                </div>
              </div>
            </div>

            <div class="form__password mb-3">
              <input
                v-model.trim="$v.userForm.password.$model"
                type="password"
                placeholder="Password"
                class="form__password-input"
                :class="{ 'form-group--error': $v.userForm.password.$error }"
              />
              <span class="form__password-symbol">
                <b-icon icon="lock"></b-icon>
              </span>
              <div class="error_register" v-if="!$v.userForm.password.required">
                Password is required.
              </div>
              <div class="error_register" v-if="!$v.userForm.password.minLength">
                Password must have at least
                {{ $v.userForm.password.$params.minLength.min }} letters.
              </div>
            </div>

            <div class="form__password mb-3">
              <input
                v-model.trim="$v.userForm.passwordConfirm.$model"
                type="password"
                placeholder="Repeat your password"
                class="form__password-input"
                name="passwordConfirm"
                :class="{
                  'form-group--error': $v.userForm.passwordConfirm.$error,
                }"
              />
              <span class="form__password-symbol">
                <b-icon icon="lock-fill"></b-icon>
              </span>
              <div
                class="error_register"
                v-if="!$v.userForm.passwordConfirm.sameAsPassword"
              >
                Passwords must be identical.
              </div>
            </div>

            <div class="custom-control custom-checkbox validate-input pt-3">
              <input type="checkbox" id="rememberMe-2" 
                v-model="accept"
                @change="$v.accept.$touch()"
                :class="{ 'is-invalid':  $v.accept.$error }"
              />
              <span>I agree all statements in Terms of Conditions</span>    
            </div>
            <div class="error_register my-3" v-if="!$v.accept.required">Accept terms and conditions</div>

            <div class="box_error">
              <p v-if="error != null" class="error_register">{{ error }}</p>
            </div>

            <div class="container-login100-form-btn">
              <button v-if="!isPending" class="login100-form-btn">Register</button>
              <button class="login100-form-btn btn-dark" v-else >Loading...</button>
            </div>
            <div class="text-danger text-left fw-bold my-3"></div>

          </form>
          <div class="login100-pic js-tilt" data-tilt>
            <img src="@/assets/images/logo/logo.png" alt="IMG" />
            <span>Today children, tomorrow the world.</span>
            <div class="text-center pt-5 pt--50">
              <router-link class="txt2" to="/login">
                Already have an account?
                <b-icon-arrow-right></b-icon-arrow-right>
              </router-link>
            </div>
          </div>
        </div>
        <back-to-home/>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required, minLength, sameAs } from "vuelidate/lib/validators";
import { AuthService, error, isPending } from "../../services/AuthService.js";
import { mapActions } from 'vuex';
import BackToHome from '../../components/common/BackToHome.vue'

export default {
  name: "Register",
  components: {
    BackToHome
  },
  setup() {
    return { error, isPending };
  },
  data() {
    return {
      userForm: {
        fullName: "",
        email: "",
        password: "",
        passwordConfirm: "",
      },
      accept: "",
    };
  },
  validations: {
    userForm: {
      fullName: { required },
      email: {
        email,
        required,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      passwordConfirm: {
        sameAsPassword: sameAs("password"),
      },
    },
    accept: {
      required(val) {
        return val;
      },
    },
  },
  methods: {
    ...mapActions('verifyEmail', ['actionSetDataEmail']),
    async register() {
      const response = await AuthService.register(this.userForm);
      if (response == true) {
        this.actionSetDataEmail(this.userForm.email);
        this.$router.push('/verify-email');
      }
    },
  },
};
</script>

<style scoped src="@/assets/css/components/login/Login.css"></style>
