<template>
  <div class="content--box">
      <div class="close__box" @click.stop="hideShow"></div>
      <div class="img--box">
          <img :src="img" alt="img__product-zoom">
      </div>
      <div class="btn__close" @click="hideShow">
          <b-icon class="icon__x" icon="X"></b-icon>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ZoomImage',
    props: {
        img: {
            type: String,
            default: ''
        }
    },
    methods: {
        hideShow() {
            this.$emit('myEvent');
        }
    }
}
</script>

<style scoped>
.content--box {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 9999;
    background-color: rgba(80, 79, 79, 0.8);
    width: 100vw;
    height: 100vh;
}
.close__box {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}
.img--box {
    width: 36vw;
    height: 90vh;
    position: fixed;
    top: 50%;
    left: 50%;
    bottom: auto;
    right: auto;
    transform: translate(-50%, -50%);
}
.img--box img {
    width: 100%;
    height: 100%;

}
.btn__close {
    background-color: #00c4cc;
    position: fixed;
    top: 15px;
    right: 15px;
    padding: 7px 10px;
    cursor: pointer;
    color: #000;
    transition: all 0.3s ease-in-out;
    border-radius: 5px;
}
.btn__close:hover {
    background-color: #333;
    color: #FFF;
}
.icon__x {
    font-size: 1.5rem;
}
</style>