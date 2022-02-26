<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-2">
          <router-link to="/">
            <img class="nav__img" src="@/assets/images/logo/logo.png" alt="" />
          </router-link>
        </div>
        <div class="col-md-7 d-flex align-items-center">
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
                    ><router-link to="/product" class="nav__link"
                      >Shop</router-link
                    ></b-nav-item
                  >
                  <b-nav-item
                    ><router-link to="" class="nav__link"
                      >Pages</router-link
                    ></b-nav-item
                  >
                  <b-nav-item
                    ><router-link to="/blog" class="nav__link"
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
          <a href="" class="nav__icon">
            <b-icon class="" icon="search"></b-icon>
          </a>
          <a href="" class="nav__icon user">
            <b-icon class="" icon="person-circle"></b-icon>
            <transition name="slide-fade">
              <!-- <div class="nav__item">
                <ul>
                  <template>
                    <li>
                      <h3>
                        Xin chào
                      </h3>
                    </li>
                    <li>
                      <router-link to="/me">Tài Khoản</router-link>
                    </li>
                    <li>
                      <a href="">Đăng xuất</a>
                    </li>
                  </template>

                  <template>
                    <li>
                      <router-link to="/login">Đăng Nhập</router-link>
                    </li>
                    <li>
                      <router-link to="/register">Đăng Ký</router-link>
                    </li>
                  </template>
                  
                </ul>
              </div> -->
            </transition>
          </a>
          <a href="" class="nav__icon">
            <b-icon class="" icon="suit-heart"></b-icon>
          </a>
          <a href="" class="nav__icon">
            <b-icon class="" icon="cart-check"></b-icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped src="@/assets/css/components/common/the-header.css">

</style>