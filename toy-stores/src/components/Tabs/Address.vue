<template>
  <div class="row">
    <h3 class="title mb-5 text-left">Address</h3>
    <div class="col">
      <div class="account-details-form">
        <form action="" @submit.prevent="">
          <div class="row mt-5">
            <div class="single-input-item mb-5 col-md-6">
              <label for="city" class="required mb-3">City / Province</label>
              <input
                type="text"
                id="city"
                placeholder="City / Province"
                disabled
                v-model="userAddress.city"
              />
            </div>
            <div class="single-input-item mb-5 col-md-6">
              <label for="district" class="required mb-3">District</label>
              <input
                type="text"
                id="district"
                placeholder="District"
                disabled
                v-model="userAddress.district"
              />
            </div>
            <div class="single-input-item mb-7 col-md-6">
              <label for="ward" class="required mb-3">Ward</label>
              <input
                type="text"
                id="ward"
                placeholder="Ward"
                disabled
                v-model="userAddress.ward"
              />
            </div>
            <div class="single-input-item mb-7 col-md-6">
              <label for="street" class="required mb-3">Street</label>
              <input
                type="text"
                id="street"
                placeholder="Street"
                disabled
                v-model="userAddress.street"
              />
            </div>
          </div>

          <div class="single-input-item single-item-button">
            <div>
              <b-button
                id="show-btn"
                class="btn btn btn-dark btn-hover-primary rounded-0"
                @click="$bvModal.show('bv-modal-address')"
                >Edit Address</b-button
              >

              <b-modal id="bv-modal-address" hide-footer>
                <template #modal-title> Edit Address</template>
                <form>
                  <div class="single-input-item mb-3">
                    <label for="city" class="required mb-1"
                      >City / Province</label
                    >
                    <input
                      type="text"
                      id="city"
                      placeholder="City / Province"
                      v-model.trim="address.city"
                      @input="activeBtn"
                    />
                  </div>
                  <div class="single-input-item mb-3">
                    <label for="district" class="required mb-1">District</label>
                    <input
                      type="text"
                      id="district"
                      placeholder="District"
                      v-model.trim="address.district"
                      @input="activeBtn"
                    />
                  </div>
                  <div class="single-input-item mb-3">
                    <label for="ward" class="required mb-1">Ward</label>
                    <input
                      type="text"
                      id="ward"
                      placeholder="Ward"
                      v-model.trim="address.ward"
                      @input="activeBtn"
                    />
                  </div>
                  <div class="single-input-item mb-3">
                    <label for="street" class="required mb-1">Street</label>
                    <input
                      type="text"
                      id="street"
                      placeholder="Street"
                      v-model.trim="address.street"
                      @input="activeBtn"
                    />
                  </div>
                </form>
                <b-button class="mt-3" block @click="updateAddress" :disabled="isActive"
                  >Save Changes</b-button
                >
                <b-button
                  class="mt-3 ms-5"
                  block
                  @click="$bvModal.hide('bv-modal-address'), isActive = true"
                  >Cancel</b-button
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
import { MeService, isPending, error } from "../../services/MeService";
export default {
  name: "Address",
  setup() {
    return { error, isPending };
  },
  data() {
    return {
      address: {
        city: "",
        district: "",
        ward: "",
        street: "",
      },
      id: "",
      userAddress: {}, 
      isActive: true
    };
  },
  computed: {
    ...mapState("users", ["userInformation"]),
  },
  methods: {
    async updateAddress() {
      if (
        this.address.city !== "" &&
        this.address.district !== "" &&
        this.address.ward !== "" &&
        this.address.street !== ""
      ) {
        const data = {
          id: this.id,
          address: this.address,
        };
        const res = await MeService.updateAddress(data);
        if (res) {
          this.$bvModal.hide("bv-modal-address");
          this.getInformation();
          alert("Updated address successfully!");
        }
      } else {
        alert("Please! Enter the information!");
      }
    },
    async getInformation() {
      const response = await MeService.me(this.id);
      if(response) {
        this.userAddress = response.data().address; 
        this.address = this.userAddress;
        this.isActive = true;
      }
    },
    activeBtn() {
      this.isActive = false;
    }
  },
  mounted() {
    this.id = this.userInformation.multiFactor.user.uid;
    this.getInformation();
  },
};
</script>

<style scoped src="@/assets/css/components/user/tabs/tabs.css"></style>
