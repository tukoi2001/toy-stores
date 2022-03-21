<template>
  <div class="quick-view-box container">
    <div class="full-width" @click.stop="hideQuickView"></div>
    <div class="btn_close" @click="hideQuickView">
      <b-icon icon="x"></b-icon>
    </div>
    <div class="row box-box">
      <div class="quick-view-img col-md-6">
        <img :src="currentImg" :alt="items.slug" />
        <div class="arrow left" @click="nextImg">
          <b-icon icon="caret-left-square"></b-icon>
        </div>
        <div class="arrow right" @click="nextImg">
          <b-icon icon="caret-right-square"></b-icon>
        </div>
      </div>

      <div class="col-md-6 quick-view-content text-start">
        <h3 class="content-title">
          {{ items.name }}
          <span v-if="items.isNew === 'True'">New</span>
        </h3>
        <p class="text__box-icon">
          <b-icon icon="star-fill"></b-icon>
          <b-icon icon="star-fill"></b-icon>
          <b-icon icon="star-fill"></b-icon>
          <b-icon icon="star-fill"></b-icon>
          <b-icon icon="star-fill"></b-icon>
          <span>(10)</span>
        </p>
        <p>{{ items.description }}</p>
        <p>
          Danh mục sản phẩm: <span>{{ items.category }}</span>
        </p>
        <p>
          Nhà phân phối: <span>Công ty xuất nhập khẩu 1 thành viên Tú Đội</span>
        </p>
        <p>Sản phẩm chuyên cung cấp: <span>Cho trẻ em Việt Nam</span></p>
        <div class="status__prod">
          <p>
            Tình trạng:
            <span class="in-stock" v-if="items.quantity > 0"
              >Còn hàng ({{ items.quantity }})</span
            >
            <span class="out-of-stock" v-else>Hết hàng</span>
          </p>
        </div>
        <div class="price-block">
          <span class="price">{{
            formatPrice(items.price - (items.price / 100) * items.sale_off)
          }}</span>
          <span class="price-old" v-if="items.sale_off">{{
            formatPrice(items.price)
          }}</span>
          <span class="price-discounts">{{ items.sale_off }}%</span>
        </div>
        <div class="btn__prod">
          <button
            type="button"
            @click="actionAddItem(items)"
            class="btn btn-primary"
          >
            Add To Cart
          </button>
          <a href=""
            ><b-icon class="btn__prod-icon" icon="arrow-repeat"></b-icon
            >Compare</a
          >
          <a href="" @click.prevent="actionAddItemWishlist(items)"
            ><b-icon class="btn__prod-icon" icon="heart"></b-icon>Wishlist</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "QuickViewProduct",
  data() {
    return {
      listImgs: [],
      currentImg: '',
      num: 0
    };
  },
  props: {
    items: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.listImgs = this.items.urlImage;
    this.currentImg = this.listImgs[0];
  },
  methods: {
    ...mapActions('cart', ['actionAddItem']),
    ...mapActions("wishlist", ["actionAddItemWishlist"]),
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    hideQuickView() {
      this.$emit('myClose');
    }, 
    nextImg() {
      if(this.num < 3) {
        this.num = this.num + 1;
        this.currentImg = this.listImgs[this.num];
      }
      else { 
        this.num = 0;
        this.currentImg = this.listImgs[this.num];
      }
    }
  },
};
</script>

<style scoped src="@/assets/css/components/product/QuickView.css"></style>
