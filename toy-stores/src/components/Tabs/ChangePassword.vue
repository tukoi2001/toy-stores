<template>
  <div>
    <h3 class="title">Change Password</h3>
    <div class="change-password-form">
      <form action="" @submit.prevent="submitChangePassword">
        <fieldset>
          <div class="single-input-item mb-3">
            <label for="current-pwd" class="required mb-1"
              >Current Password</label
            >
            <input
              v-model.trim="$v.currentPassword.$model"
              type="password"
              id="current-pwd"
              placeholder="Current Password"
              :class="{ 'form-group--error': $v.currentPassword.$error }"
            />
            <div class="errors" v-if="!$v.currentPassword.required">
              Password is required.
            </div>
            <div class="errors" v-if="!$v.currentPassword.minLength">
              Password must have at least
              {{ $v.currentPassword.$params.minLength.min }} letters.
            </div>
          </div>
          <b-row>
            <b-col lg="6">
              <div class="single-input-item mb-3">
                <label for="new-pwd" class="required mb-1">New Password</label>
                <input
                  v-model.trim="$v.newPassword.$model"
                  type="password"
                  id="new-pwd"
                  placeholder="New Password"
                  :class="{ 'form-group--error': $v.newPassword.$error }"
                />
                <div class="errors" v-if="!$v.newPassword.required">
                  New Password is required.
                </div>
                <div class="errors" v-if="!$v.newPassword.minLength">
                  Password must have at least
                  {{ $v.newPassword.$params.minLength.min }} letters.
                </div>
              </div>
            </b-col>
            <b-col lg="6">
              <div class="single-input-item mb-3">
                <label for="confirm-pwd" class="required mb-1"
                  >Confirm Password</label
                >
                <input
                  v-model.trim="$v.confirmNewPassword.$model"
                  type="password"
                  id="confirm-pwd"
                  placeholder="Confirm New Password"
                  :class="{ 'form-group--error': $v.confirmNewPassword.$error }"
                />
                <div class="errors" v-if="!$v.confirmNewPassword.sameAsPassword">
                  Passwords must be identical.
                </div>
              </div>
            </b-col>
          </b-row>
        </fieldset>
        <div class="single-input-item single-item-button">
          <button
            class="btn btn btn-dark btn-hover-primary rounded-0"
            type="submit"
            v-if="isPending"
          >
            Loading...
          </button>
          <button
            class="btn btn btn-dark btn-hover-primary rounded-0"
            type="submit"
            v-else
          >
            Save Changes
          </button>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import { auth } from "../../configs/firebase";
import { EmailAuthProvider, reauthenticateWithCredential  } from 'firebase/auth';
export default {
  name: "ChangePassword",
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      isPending: false,
    };
  },
  validations: {
    currentPassword: {
      required,
      minLength: minLength(8),
    },
    newPassword: {
      required,
      minLength: minLength(8),
    },
    confirmNewPassword: {
      sameAsPassword: sameAs("newPassword"),
    },
  },
  methods: {
    submitChangePassword() {
      if (
        this.currentPassword !== "" &&
        this.newPassword !== "" &&
        this.confirmNewPassword !== ""
      ) {
        this.isPending= true;
        if (this.newPassword === this.confirmNewPassword) {
          const user = auth.currentUser;
          if (user && user !== null && user.email !== null) {
            const credential = EmailAuthProvider.credential(user.email, this.currentPassword);
            reauthenticateWithCredential(user, credential).then(() => {
              user.updatePassword(this.newPassword).then(() => {
              alert('Update New Password Successful!');
              this.currentPassword = '';
              this.newPassword = '';
              this.confirmNewPassword = '';
              this.isPending = false;
            }).catch((error) => {
              console.log(error);
              this.isPending = false;
            });
            })
            .catch((error) => {
              console.log(error);
              this.isPending = false;
            });
          } else {
            this.$router.push("/login");
          }
        } else {
          alert("Confirm new password isn't matching!");
        }
      } else {
        alert("Please, enter all the fields!");
      }
    },
  },
};
</script>

<style scoped src="@/assets/css/components/user/tabs/tabs.css"></style>
