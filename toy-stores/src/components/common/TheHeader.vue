<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <router-link to="/">
            <img class="nav__img" src="@/assets/images/logo/logo.png" alt="" />
          </router-link>
        </div>
        <div class="col-md-7 d-flex align-items-center justify-content-center">
          <div>
            <b-navbar toggleable="lg" type="dark" variant="info">
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item
                    ><router-link to="/" class="nav__link"
                      >Home</router-link
                    ></b-nav-item
                  >
                  <b-nav-item
                    ><router-link to="/categories/tat-ca-san-pham" class="nav__link"
                      >Shop</router-link
                    ></b-nav-item
                  >
                  <b-nav-item
                    ><router-link to="/blogs" class="nav__link"
                      >Blog</router-link
                    ></b-nav-item
                  >
                  <b-nav-item
                    ><router-link to="/about" class="nav__link"
                      >About</router-link
                    ></b-nav-item
                  >
                  <b-nav-item
                    ><router-link to="/contact" class="nav__link"
                      >Contact</router-link
                    ></b-nav-item
                  >
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </div>

        <div class="col-md-3 d-flex align-items-center justify-content-around">
          <a href="" class="nav__icon" @click.prevent="showSearch = true">
            <b-icon class="icon__header" icon="search"></b-icon>
          </a>
          <transition name="fade">
            <search-box @mySearch="hideShowSearch" v-if="showSearch"/>
          </transition>
          <a
            href=""
            @click.prevent="accountTabs = !accountTabs"
            class="nav__icon user"
          >
            <b-icon class="icon__header" icon="person-circle"></b-icon>
          </a>
            <account-tab v-if="accountTabs" @myAccount="hideShowAccount" />
          <a href="" class="nav__icon" @click.prevent="wishlistClick">
            <b-icon class="icon__header" icon="suit-heart"></b-icon>
            <span v-if="itemsWishlist.length">{{ itemsWishlist.length }}</span>
          </a>
          <a href="" class="nav__icon" @click.prevent="cartClick">
            <b-icon class="icon__header" icon="cart-check"></b-icon>
            <span v-if="items.length">{{ items.length }}</span>
          </a>
          <template>
              <the-cart v-if="showCart" @myEvent="hideShowCart" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AccountTab from "./header-tabs/AccountTab.vue";
import SearchBox from './header-tabs/SearchBox.vue';
import TheCart from "./header-tabs/TheCart.vue";
export default {
  components: { AccountTab, TheCart, SearchBox },
  name: "TheHeader",
  data() {
    return {
      accountTabs: false,
      showCart: false,
      showSearch: false
    };
  },
  computed: { 
    ...mapState('cart', ['items']),
    ...mapState('wishlist', ['itemsWishlist']),
    ...mapState(['token'])
  },
  methods: {
    hideShowCart() {
      this.showCart = false;
    },
    hideShowAccount() {
      this.accountTabs = false;
    },
    hideShowSearch() {
      this.showSearch = false;
    },
    cartClick() {
      if (this.token !== null) {
        this.showCart = true;
      } else {
        alert("Bạn cần đăng nhập để sử dụng chức năng này!")
      }
    },
    wishlistClick() {
      if (this.token !== null) {
        this.$router.push('/wishlist');
      } else {
        alert("Bạn cần đăng nhập để sử dụng chức năng này!")
      }
    }
  },
};
</script>

<style scoped src="@/assets/css/components/common/the-header.css"></style>
