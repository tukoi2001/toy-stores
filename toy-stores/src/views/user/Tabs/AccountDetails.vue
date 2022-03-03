<template>
  <div>
    <h3 class="title">Account Details</h3>
    <div class="account-details-form">
      <form action="#">
        <b-row>
          <b-col lg="6">
            <div class="single-input-item mb-3">
              <label for="first-name" class="required mb-1">First Name</label>
              <input type="text" id="first-name" placeholder="First Name" />
            </div>
          </b-col>
          <b-col lg="6">
            <div class="single-input-item mb-3">
              <label for="last-name" class="required mb-1">Last Name</label>
              <input type="text" id="last-name" placeholder="Last Name" />
            </div>
          </b-col>
        </b-row>
        <div class="single-input-item mb-3">
          <label for="display-name" class="required mb-1">Display Name</label>
          <input type="text" id="display-name" placeholder="Display Name" />
        </div>
        <div class="single-input-item mb-3">
          <label for="email" class="required mb-1">Email Address</label>
          <input type="email" id="email" placeholder="Email Address" />
        </div>
        <fieldset>
          <legend>Billing Address</legend>
          <b-row>
            <b-col lg="6">
              <div class="single-input-item mb-3">
                <label for="address-1" class="required mb-1">Address 1</label>
                <input type="text" id="address-1" placeholder="Address 1" />
              </div>
            </b-col>
            <b-col lg="6">
              <div class="single-input-item mb-3">
                <label for="address-2" class="required mb-1">Address 2</label>
                <input type="text" id="address-2" placeholder="Address 2" />
              </div>
            </b-col>
          </b-row>
          <div class="single-input-item mb-3">
            <label for="mobile" class="required mb-1">Mobile</label>
            <input type="text" id="mobile" placeholder="Mobile" />
          </div>
        </fieldset>
        <div class="single-input-item single-item-button">
          <button class="btn btn btn-dark btn-hover-primary rounded-0">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style  scoped src="@/assets/css/components/user/tabs/tabs.css">
</style>