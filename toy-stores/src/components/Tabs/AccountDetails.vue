<template>
  <div class="row">
    <h3 class="title mb-5 text-left">Account Details</h3>
    <div class="col-md-6">
      <div class="img_user">
        <img :src="dataCurrentUser.photoURL" v-if="dataCurrentUser.photoURL !== null"/>
        <img src="@/assets/images/user/empty.jpg" alt="" v-else/>
        <div class="change-avatar">
          <label for="fileUpLoad"><b-icon class="icon_upload" icon="image"></b-icon></label>
          <input type="file" id="fileUpLoad" @change="fileUpLoad" />
          <button type="submit" class="btn btn-primary" @click="uploadImg">Save</button>
        </div>
      </div>
      <h3 class="text-center fw-bold mt-4">
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
              v-model="dataCurrentUser.phoneNumber"
              disabled
            />
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
              <b-button
                id="show-btn"
                class="btn btn btn-dark btn-hover-primary rounded-0"
                @click="$bvModal.show('bv-modal-example')"
                >Edit</b-button
              >

              <b-modal id="bv-modal-example" hide-footer>
                <template #modal-title> Edit My Profile </template>
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
                    />
                  </div>
                  <div class="single-input-item mb-3">
                    <label for="mobile" class="required mb-1"
                      >Mobile Phone</label
                    >
                    <input
                      type="text"
                      id="mobile"
                      placeholder="Mobile Phone"
                      v-model.trim="dataModified.phoneNumber"
                    />
                  </div>
                </form>
                <b-button class="mt-3" block @click="updateUserProfile"
                  >Save Changes</b-button
                >
                <b-button
                  class="mt-3 ms-5"
                  block
                  @click="$bvModal.hide('bv-modal-example')"
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

export default {
  data() {
    return {
      dataModified: {
        displayName: "",
        phoneNumber: "",
      },
      imgUpLoad: null,
      imgUser: null,
      uploadValue: 0
    };
  },
  computed: {
    ...mapState("users", ["userInformation"]),
    dataCurrentUser() {
      return this.userInformation.multiFactor.user;
    },
  },
  methods: {
    async updateUserProfile() {
      const user = await auth.currentUser;
      user
        .updateProfile({
          displayName: this.dataModified.displayName,
        })
        .then(() => {
          alert('Update Information Successfully!')
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          this.$bvModal.hide("bv-modal-example");
        });
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
        })
    },
    fileUpLoad(event) {
      this.imgUpLoad = event.target.files[0];
      console.log(this.imgUpLoad);
    },
    uploadImg() {
      const storageRef = storage.ref(`/imageUser/${this.imgUpLoad.name}`);
      const task = storageRef.put(this.imgUpLoad);
      task.on('state_changed', snapshot => {
        let percentage = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
        this.uploadValue = percentage;
      }, error => {
        console.log(error);
      }, () => {
        task.snapshot.ref.getDownloadURL().then((url) => {
          this.imgUser = url;
          this.updateImg(url)
        })
      })
    }
  },
  mounted() {

  },
};
</script>

<style scoped src="@/assets/css/components/user/tabs/tabs.css"></style>
