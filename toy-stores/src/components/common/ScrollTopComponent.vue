<template>
  <div>
    <a @click="scrollTop" v-show="visible" class="bottom-right">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "ScrollTopComponent",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    },
    scrollListener() {
      this.visible = window.scrollY > 150;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 99;
}
</style>