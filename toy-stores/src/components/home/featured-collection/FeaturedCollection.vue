<template>
  <div>
    <div class="best-seller-product">
      <div class="collection__wrapper mt-0 position-relative">
        <b-container>
          <b-row class="row mb-lg-5 mb-4">
            <b-col lg="" cols="12">
              <div class="section-title mb-0 text-center">
                <div class="title-container">
                  <h2 class="fw-bold">Sản phẩm mới nhất</h2>
                </div>
                <p class="text-start my-5">
                  Các sản phẩm mới nhất được cập nhật hàng ngày!
                </p>
              </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <div class="product-carousel arrow-outside-container">
                <swiper class="swiper" :options="swiperOption">
                  <swiper-slide
                    v-for="(item, index) in listNewProducts"
                    :key="index"
                  >
                    <!-- Product Tab Start -->
                    <product>
                      <template v-slot:image>
                        <p class="image m-0" @click="getProductDetail(item)">
                          <img
                            class="fit-image"
                            :src="item.urlImage[1]"
                            alt="Product"
                          />
                        </p>
                      </template>
                      <template v-slot:action>
                        <a
                          href=""
                          @click.prevent="actionAddItemWishlist(item)"
                          class="action wishlist"
                          ><b-icon icon="heart"></b-icon>
                        </a>
                        <a href="" class="action compare"
                          ><b-icon icon="arrow-repeat"></b-icon>
                        </a>
                        <a
                          href=""
                          class="action quickview"
                          @click.prevent="setItemQuickView(item)"
                          ><b-icon icon="search"></b-icon
                        ></a>
                      </template>
                      <template v-slot:add-item>
                        <button
                          @click="actionAddItem(item)"
                          class="btn btn-whited btn-hover-primary text-capitalize add-to-cart"
                        >
                          Add To Cart
                        </button>
                      </template>
                      <template v-slot:content>
                        <h5 class="title">
                          <p @click="getProductDetail(item)">{{ item.name }}</p>
                        </h5>
                        <div
                          class="price-block d-flex align-items-center justify-content-center"
                        >
                          <span class="price me-2">{{
                            formatPrice(
                              item.price - (item.price / 100) * item.sale_off
                            )
                          }}</span>
                          <span class="price-old me-2">{{
                            formatPrice(item.price)
                          }}</span>
                          <span class="price-discount"
                            >{{ item.sale_off }}%</span
                          >
                        </div>
                      </template>
                    </product>
                    <!-- Product Tab End -->
                  </swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <quick-view-product
      v-if="quickView"
      :items="itemQuickView"
      @myClose="hideQuickView"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { ProductService } from "../../../services/ProductService";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Product from "../../common/products/Product.vue";
import QuickViewProduct from "../../product/QuickViewProduct.vue";
export default {
  name: "FeaturedCollection",
  components: { Swiper, SwiperSlide, Product, QuickViewProduct },
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 30,
        loop: true,
        keyboard: {
          enabled: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
      listNewProducts: [],
      quickView: false,
      itemQuickView: {},
    };
  },
  methods: {
    async getDataProduct() {
      const res = await ProductService.show();
      const newRes = res.docs.map((item, index) => {
        return {
          id: item.id,
          index: index,
          ...item.data(),
        };
      });
      const list = newRes.filter((product) => product.isNew === "True");
      this.listNewProducts = list;
    },
    getProductDetail(product) {
      this.actionSetProductDetail(product);
      const id = product.slug + product.id;
      this.$router.push(`/products/${id}`);
    },
    formatPrice(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    ...mapActions("products", ["actionSetProductDetail"]),
    ...mapActions("cart", ["actionAddItem"]),
    ...mapActions("wishlist", ["actionAddItemWishlist"]),
    setItemQuickView(item) {
      this.itemQuickView = item;
      this.quickView = true;
    },
    hideQuickView() {
      this.quickView = false;
    },
  },
  async mounted() {
    this.getDataProduct();
  },
};
</script>

<style
  scoped
  src="@/assets/css/components/home/featured-collection.css"
></style>
