<template>
  <div class="row">
    <loading-user v-if="isLoading"/>
    <h3 class="title mb-5 text-left">Account Details</h3>
    <div class="col-md-6">
      <div class="img_user">
        <img
          :src="dataCurrentUser.photoURL"
          v-if="dataCurrentUser.photoURL !== null"
        />
        <img src="@/assets/images/user/empty.jpg" alt="" v-else />
        <div class="change-avatar">
          <label for="fileUpLoad"
            ><b-icon class="icon_upload" icon="image"></b-icon
          ></label>
          <input type="file" id="fileUpLoad" @change="fileUpLoad" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-save" @click="uploadImg" v-if="imgUpLoad !== null">
        Save
      </button>
      <h3 class="text-center title__user fw-bold mt-4">
        {{ dataCurrentUser.displayName }}
      </h3>
    </div>
    <div class="col-md-6">
      <div class="account-details-form">
        <form action="" @submit.prevent="">
          <div class="single-input-item mb-3">
            <label for="display-name" class="required mb-1">Display Name</label>
            <input
              type="text"
              id="display-name"
              placeholder="Display Name"
              v-model="dataCurrentUser.displayName"
              disabled
            />
            <div class="edit_field" @click="$bvModal.show('bv-modal-example')">
              <b-icon icon="pencil"></b-icon>
            </div>
          </div>
          <div class="single-input-item mb-3">
            <label for="email" class="required mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              v-model="dataCurrentUser.email"
              disabled
            />
          </div>
          <div class="single-input-item mb-3">
            <label for="mobile" class="required mb-1">Mobile Phone</label>
            <input
              type="text"
              id="mobile"
              placeholder="Mobile Phone"
              v-model="dataModified.phoneNumber"
              disabled
            />
            <div class="edit_field" @click="$bvModal.show('bv-modal-phone')">
              <b-icon icon="pencil"></b-icon>
            </div>
          </div>
          <div class="single-input-item mb-3">
            <label for="account_status" class="required mb-1"
              >Account Status</label
            >
            <input
              type="text"
              id="account_status"
              placeholder="Account Status"
              v-model="dataCurrentUser.emailVerified"
              disabled
            />
          </div>
          <div class="single-input-item mb-3">
            <label for="created_at" class="required mb-1">Create At</label>
            <input
              type="text"
              id="created_at"
              placeholder="Account Status"
              v-model="dataCurrentUser.metadata.creationTime"
              disabled
            />
          </div>
          <div class="single-input-item single-item-button">
            <div>
              <b-modal id="bv-modal-example" hide-footer>
                <template #modal-title> Edit Full Name </template>
                <form>
                  <div class="single-input-item mb-3">
                    <label for="display-name" class="required mb-1"
                      >Display Name</label
                    >
                    <input
                      type="text"
                      id="display-name"
                      placeholder="Display Name"
                      v-model.trim="dataModified.displayName"
                      @input="activeBtn"
                    />
                  </div>
                </form>
                <b-button
                  class="mt-3 button_save"
                  block
                  @click="updateUserProfile"
                  :disabled="isActive"
                  >Save Changes</b-button
                >
                <b-button
                  class="mt-3 ms-5 button_close"
                  block
                  @click="$bvModal.hide('bv-modal-example'), (isActive = true)"
                  >Close Me</b-button
                >
              </b-modal>

              <b-modal id="bv-modal-phone" hide-footer>
                <template #modal-title> Edit Phone Number </template>
                <form action @submit.prevent="">
                  <div class="single-input-item mb-3">
                    <label for="mobile" class="required mb-1"
                      >Mobile Phone</label
                    >
                    <input
                      type="text"
                      id="mobile"
                      placeholder="Mobile Phone"
                      v-model.trim="phoneNumber"
                      pattern="/((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/"
                      @input="activeBtn"
                    />
                  </div>
                </form>
                <b-button
                  type="submit"
                  class="mt-3 button_save"
                  block
                  @click="updatePhoneNumber"
                  :disabled="isActive"
                  >Save Changes</b-button
                >
                <b-button
                  class="mt-3 ms-5 button_close"
                  block
                  @click="$bvModal.hide('bv-modal-phone'), (isActive = true)"
                  >Close Me</b-button
                >
              </b-modal>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { auth, storage } from "../../configs/firebase";
import { MeService } from "../../services/MeService";
import LoadingUser from './LoadingUser.vue';

export default {
  components: { LoadingUser },
  data() {
    return {
      dataModified: {
        displayName: "",
        phoneNumber: "",
      },
      imgUpLoad: null,
      imgUser: null,
      uploadValue: 0,
      id: "",
      phoneNumber: "",
      isActive: true,
      isLoading: false,
    };
  },
  computed: {
    ...mapState("users", ["userInformation"]),
    dataCurrentUser() {
      return this.userInformation.multiFactor.user;
    },
  },
  methods: {
    async getInformation() {
      const response = await MeService.me(this.id);
      if (response) {
        this.dataModified.phoneNumber = response.data().phoneNumber;
      }
    },
    async updateUserProfile() {
      if (this.dataModified.displayName !== "") {
        const user = await auth.currentUser;
        user
          .updateProfile({
            displayName: this.dataModified.displayName,
          })
          .then(() => {
            alert("Update Information Successfully!");
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            this.$bvModal.hide("bv-modal-example");
          });
      } else {
        alert("Vui lòng nhập tên theo đúng định dạng!");
      }
    },

    async updatePhoneNumber() {
      if (this.phoneNumber.length === 10) {
        const data = {
          id: this.id,
          phoneNumber: this.phoneNumber,
        };
        const response = await MeService.updatePhoneNumber(data);
        if (response) {
          this.getInformation();
          alert("Updated phone number successfully!");
          this.$bvModal.hide("bv-modal-phone");
        }
      } else {
        alert("Vui lòng nhập đúng định dạng cho số điện thoại!");
      }
    },

    async updateImg(img) {
      const user = await auth.currentUser;
      user
        .updateProfile({
          photoURL: img,
        })
        .then(() => {
          alert("Update Avatar Successfully!");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fileUpLoad(event) {
      this.imgUpLoad = event.target.files[0];
    },
    uploadImg() {
      this.isLoading = true;
      const storageRef = storage.ref(`/imageUser/${this.imgUpLoad.name}`);
      const task = storageRef.put(this.imgUpLoad);
      task.on(
        "state_changed",
        (snapshot) => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.uploadValue = percentage;
        },
        (error) => {
          console.log(error);
        },
        () => {
          task.snapshot.ref.getDownloadURL().then((url) => {
            this.imgUser = url;
            this.imgUpLoad = null;
            this.isLoading = false;
            this.updateImg(url);
          });
        }
      );
    },
    activeBtn() {
      this.isActive = false;
    },
  },
  mounted() {
    this.id = this.userInformation.multiFactor.user.uid;
    this.getInformation();
  },
};
</script>

<style scoped src="@/assets/css/components/user/tabs/tabs.css"></style>
