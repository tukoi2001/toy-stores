<template>
  <div>
    <h3 class="title">Change Password</h3>
    <div class="change-password-form">
      <form action="#">
        <fieldset>
          <div class="single-input-item mb-3">
            <label for="current-pwd" class="required mb-1"
              >Current Password</label
            >
            <input
              type="password"
              id="current-pwd"
              placeholder="Current Password"
            />
          </div>
          <b-row>
            <b-col lg="6">
              <div class="single-input-item mb-3">
                <label for="new-pwd" class="required mb-1">New Password</label>
                <input
                  type="password"
                  id="new-pwd"
                  placeholder="New Password"
                />
              </div>
            </b-col>
            <b-col lg="6">
              <div class="single-input-item mb-3">
                <label for="confirm-pwd" class="required mb-1"
                  >Confirm Password</label
                >
                <input
                  type="password"
                  id="confirm-pwd"
                  placeholder="Confirm Password"
                />
              </div>
            </b-col>
          </b-row>
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