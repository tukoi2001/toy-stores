<template>
  <div class="box__des">
      <h2>Thông tin chi tiết sản phẩm:</h2>
      <div>
          <span class="des__content" v-html="des"></span>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'DescriptionProd',
    data() {
        return {
            des: ''
        }
    },
    computed: {
        ...mapState('products', ['productDetail']),
    },
    mounted() {
        this.des = this.productDetail.sub_description;
    }
}
</script>

<style scoped>
.box__des {
    margin: 40px 0;
}
.des__content {
    margin-top: 20px;
    display: block;
}
</style>