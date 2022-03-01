<template>
  <div>
    <auth-layout>
      <div class="wrapper">
        <div class="limiter">
          <div class="container-reset">
            <div class="wrap-login100">
              <div class="login100-pic js-tilt" data-tilt>
                <img src="@/assets/images/logo/logo.png" alt="IMG" />
                <span>Today children, tomorrow the world.</span>
              </div>
              <form
                class="login100-form validate-form"
                @submit.prevent="resetPassword"
              >
                <span class="login100-form-title"> Reset Password </span>
                <div class="form__email mb-3">
                  <input
                    v-model.trim="$v.email.$model"
                    type="email"
                    placeholder="Email"
                    class="form__email-input"
                    :class="{ 'form-group--error': $v.email.$error }"
                  />
                  <span class="form__email-symbol">
                    <b-icon icon="envelope"></b-icon>
                  </span>
                  <div class="text-left">
                    <div class="error" v-if="!$v.email.required">
                      Email is required
                    </div>
                    <div class="error" v-if="!$v.email.email">
                      Email must be valid
                    </div>
                  </div>
                </div>
                <div class="box_error">
                  <p v-if="error != null" class="error">{{ error }}</p>
                </div>
                <div class="box_message">
                  <p v-if="message != null" class="text_message">
                    {{ message }}
                  </p>
                </div>
                <div class="container-login100-form-btn">
                  <button class="login100-form-btn" v-if="!isPending">
                    Submit
                  </button>
                  <button class="login100-form-btn btn-dark" v-else>
                    Loading...
                  </button>
                </div>
                <div class="row-create-account text-center">
                  <router-link class="txt2" to="/login">
                    You already have an account
                    <b-icon-arrow-right></b-icon-arrow-right>
                  </router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </auth-layout>
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
import AuthLayout from "../../components/layout/AuthLayout.vue";
import {
  AuthService,
  error,
  isPending,
  message,
} from "../../services/AuthService.js";
export default {
  components: { AuthLayout },
  name: "ResetPassword",
  setup() {
    return { error, isPending, message };
  },
  data() {
    return {
      email: "",
    };
  },
  validations: {
    email: {
      email,
      required,
    },
  },
  methods: {
    async resetPassword() {
      const response = await AuthService.reset_password(this.email);
      console.log(response);
    },
  },
};
</script>

<style scoped src="@/assets/css/components/login/Login.css"></style>
