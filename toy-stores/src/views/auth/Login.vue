<template>
  <div>
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100">
          <div class="login100-pic js-tilt" data-tilt>
            <img src="@/assets/images/logo/logo.png" alt="IMG" />
            <span>Today children, tomorrow the world.</span>
          </div>

          <form class="login100-form validate-form" @submit.prevent="">
            <span class="login100-form-title"> Login </span>

            <div class="form__email mb-3">
              <input
                v-model.trim="$v.userForm.email.$model"
                type="email"
                placeholder="Email"
                class="form__email-input"
                :class="{ 'form-group--error': $v.userForm.email.$error }"
              />
              <span class="form__email-symbol">
                <b-icon icon="envelope"></b-icon>
              </span>
              <div class="text-left">
                <div class="errors" v-if="!$v.userForm.email.required">
                  Email is required
                </div>
                <div class="errors" v-if="!$v.userForm.email.email">
                  Email must be valid
                </div>
              </div>
            </div>

            <div class="form__password mb-3">
              <input
                v-model.trim="$v.userForm.password.$model"
                :type="type"
                placeholder="Password"
                class="form__password-input"
                :class="{ 'form-group--error': $v.userForm.password.$error }"
              />
              <span class="form__password-symbol">
                <b-icon icon="lock"></b-icon>
              </span>
              <span class="form__password-right" @click.stop="showPassword()">
                <b-icon v-if="type == 'text'" icon="eye"></b-icon>
                <b-icon v-if="type == 'password'" icon="eye-slash"></b-icon>
              </span>
              <div class="errors" v-if="!$v.userForm.password.required">
                Password is required.
              </div>
              <div class="errors" v-if="!$v.userForm.password.minLength">
                Password must have at least
                {{ $v.userForm.password.$params.minLength.min }} letters.
              </div>
            </div>
            <div class="box_error">
              <p v-if="error != null" class="errors">{{ error }}</p>
            </div>
            <div class="container-login100-form-btn">
              <button
                @click="login"
                class="login100-form-btn"
                v-if="!isPending"
              >
                Login
              </button>
              <button class="login100-form-btn btn-dark" v-else>
                Loading...
              </button>
            </div>

            <div class="container-google100-form-btn">
              <button class="google100-form-btn" @click="googleSignIn">
                <b-icon-google class="icon-google"></b-icon-google>
                Google
              </button>
            </div>

            <div class="row-forgot text-center">
              <span class="txt1"> Forgot </span>
              <router-link class="txt2" to="/reset-password">
                Username / Password?
              </router-link>
            </div>

            <div class="row-create-account text-center">
              <router-link class="txt2" to="/register">
                Create your Account
                <b-icon-arrow-right></b-icon-arrow-right>
              </router-link>
            </div>
          </form>
        </div>
        <back-to-home />
      </div>
    </div>
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import { AuthService, error, isPending } from "../../services/AuthService.js";
import { auth } from "../../configs/firebase";
import BackToHome from "../../components/common/BackToHome.vue";
import firebase from "firebase/compat/app";
export default {
  name: "Login",
  components: {
    BackToHome,
  },
  setup() {
    return { error, isPending };
  },
  data() {
    return {
      userForm: {
        email: "",
        password: "",
      },
      type: "password",
    };
  },
  validations: {
    userForm: {
      email: {
        email,
        required,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    async login() {
      const response = await AuthService.login(this.userForm);
      if (response) {
        const user = await auth.currentUser;
        const token = user.multiFactor.user.accessToken;
        this.$store.dispatch("actionSetToken", token);
        console.log(user);
        console.log(token);
        this.$router.push("/");
      }
    },
    googleSignIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          this.$store.dispatch("actionSetToken", token);
          let user = result.user;
          console.log(token);
          console.log(user);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showPassword() {
      if (this.type == "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },
};
</script>

<style scoped src="@/assets/css/components/login/Login.css"></style>
