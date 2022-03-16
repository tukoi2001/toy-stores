<template>
  <div>
    <user-layout>
      <bread-crumbs :title="'Order Complete'" />
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h2 class="title__box">Đặt hàng thành công!</h2>
            <p class="des__box">
              Chúc mừng quý khách đã đặt hàng thành công! Shop sẽ kiểm tra đơn
              hàng và giao hàng cho quý khách sớm nhất. <br />Quý khách vui lòng
              kiểm tra tình trạng đơn hàng để cập nhật thông tin về đơn hàng!
              Cảm ơn quý khách đã tin tưởng và sử dụng dịch vụ của chúng tôi!!!
            </p>
            <div class="img__box">
              <img src="@/assets/images/order-complete/thankyou.gif" alt="" />
              <div class="back_home">
                <router-link class="back_home-link" to="/">Quay về trang chủ</router-link>
            </div>
            </div>
          </div>
        </div>
      </div>
      <brands />
    </user-layout>
  </div>
</template>

<script>
import BreadCrumbs from "../../components/common/BreadCrumbs.vue";
import Brands from "../../components/home/brands/Brands.vue";
import UserLayout from "../../components/layout/UserLayout.vue";
export default {
  name: "OrderComplete",
  components: { UserLayout, BreadCrumbs, Brands },
};
</script>

<style scoped>
.breadcrumb-box {
  margin-bottom: 40px;
}
.brands {
  margin-top: 40px;
}
.img__box {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 55vh;
  position: relative;
}
.back_home {
    position: absolute;
    top: 48%;
    left: 50%;
    bottom: auto;
    right: auto;
    transform: translate(-50%, -50%);
}
.back_home-link {
    text-decoration: none;
    background-color: #FFF;
    border: 1px solid #f5f5f5;
    padding: 15px 40px;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: bold;
    color: #000;
    box-shadow: 2px 2px 10px 10px rgba(236, 16, 16, 0.6);
    margin: 0;
    transition: all 0.3s ease-in-out;
}
.back_home-link:hover {
    border-color: #333;
    background-color: #333;
    color: #fff;
     box-shadow: 2px 2px 10px 10px rgba(255,255,255, 1);
}
.img__box img {
  width: 70%;
  height: 100%;
}
.title__box {
  font-weight: bold;
  padding-bottom: 10px;
}
.des__box {
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.5;
}
</style>
