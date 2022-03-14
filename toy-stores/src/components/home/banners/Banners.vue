<template>
  <div class="banners">
    <b-container>
      <b-row class="mb-n2">
        <b-col
          cols="12"
          md="6"
          class="mb-4 pe-lg-2 pe-md-3"
          v-for="(item, index) in banners"
          :key="index"
        >
          <router-link to="/categories/tat-ca-san-pham" class="banner">
            <img :src="item.image" alt="Banner Image" />
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Banners",
  data() {
    return {
      banners: [
        {
          image: require("@/assets/images/home/banners/2.jpg"),
        },
        {
          image: require("@/assets/images/home/banners/1.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped src="@/assets/css/components/home/banners.css">
</style>