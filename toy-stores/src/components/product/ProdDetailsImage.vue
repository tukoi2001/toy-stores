<template>
  <div class="img__box">
      <div class="big__img" @click="showImg">
        <img :src="currentImg" alt="img__product">
      </div>
      <div class="small__img">
          <div class="small__img-item" v-for="(item, index) in listImg" :key="index" @click="setImageCurrent(item)">
              <img :src="item" alt="img__product">
          </div>
      </div>
        <transition name="fade">
            <zoom-image :img="currentImg" v-if="show" @myEvent="hideShow()"/>
        </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ZoomImage from './ZoomImage.vue';
export default {
  components: { ZoomImage },
    name: 'ProdDetailsImage',
    data() {
        return {
            show: false,
        }
    },
    computed: {
        ...mapState('products', ['productDetail', 'listImg', 'currentImg'])
    },
    methods: { 
        ...mapMutations('products', ['setImageCurrent']),
        hideShow() {
            this.show = false;
        },
        showImg() {
            this.show = true;
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
.big__img {
    height: 420px;
    padding: 0 100px;
    overflow: hidden;
    cursor: pointer;
}
.big__img img {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
}
.small__img {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    margin-top: 20px;
}
.small__img-item {
    width: 23%;
    height: 110px;
    margin: 5px;
    overflow: hidden;
    cursor: pointer;
}
.small__img-item img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #ccc;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>