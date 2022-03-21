<template>
  <div class="search__main">
    <div class="offcanvas-overlay" @click.stop="hideShowSearch"></div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="search__box">
            <input type="text" @keyup.enter="submitSearch" class="search__input" v-model.trim="search" placeholder="Search ..."/>
            <div class="search__icon" @click="submitSearch">
                <b-icon class="icon" icon="search"></b-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: "SearchBox",
  data() {
    return {
      search: ''
    }
  },
  methods: {
    ...mapMutations('products', ['setSearchTitle']),
    hideShowSearch() {
      this.$emit("mySearch");
    },
    submitSearch() {
      const result = this.search;
      this.setSearchTitle(result);
      this.$router.push({ path: '/products-search', query: { product: `${result}` } });
      this.hideShowSearch();
    }
  },
};
</script>

<style scoped>
.search__main {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
}
.offcanvas-overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #ccc;
  opacity: 0.6;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
}
.search__box {
  width: 50%;
  height: 150px;
  background-color: #fff;
  position: absolute;
  z-index: 10;
  top: 35%;
  bottom: auto;
  left: 50%;
  right: auto;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgb(0 0 0 / 50%);
}
input.search__input {
    padding: 15px 5px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.5;
    min-width: 80%;
    border: none;
    border-bottom: 2px solid #ccc;
    display: block;
    margin: 35px 0px 55px 40px;
}
.search__icon {
    position: absolute;
    top: 40px;
    left: auto;
    right: 40px;
    background: #00c4cc;
    padding: 14px 20px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}
.icon {
    width: 25px;
    height: 25px;
    color: #FFF;
}
input.search__input:focus {
    border-bottom: 2px solid #00c4cc;
}
.search__icon:hover {
    background-color: #1b1b1b;
}
</style>
