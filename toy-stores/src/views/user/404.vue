<template>
  <div>
    <user-layout>
      <bread-crumbs :title="'Page Not Found'" />
      <div class="container">
        <div class="row margin-bottom">
          <div class="col-12">
            <div class="error_form">
              <h1 class="title-404">404</h1>
              <h2 class="sub-title-404">Opps! PAGE NOT BE FOUND</h2>
              <p>
               Xin lỗi nhưng trang bạn đang tìm kiếm không tồn tại, hoặc<br />
                đã bị xóa, hoặc tạm thời không khả dụng.
              </p>
              <router-link to="/" class="btn btn-primary"
                >Quay trở về trang chủ</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </user-layout>
  </div>
</template>

<script>
import BreadCrumbs from "../../components/common/BreadCrumbs.vue";
import UserLayout from "../../components/layout/UserLayout.vue";
export default {
  name: "Home",
  components: { UserLayout, BreadCrumbs },
};
</script>

<style scoped>
.margin-bottom {
  margin-bottom: 80px;
}
.title-404 {
  font-size: 200px;
  font-weight: 700;
  color: #00c4cc;
  letter-spacing: 10px;
  line-height: 0.73;
  margin: 0 0 52px;
}
.sub-title-404 {
  font-size: 24px;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 20px;
    color: #000;
}
.error_form p {
  font-size: 18px;
    font-weight: 400;
    margin-bottom: 30px;
        color: #000;
}
.btn-primary {
    border-color: #00c4cc;
    background-color: #00c4cc;
    color: #ffffff;
    background-color: #00c4cc;
    border: 1px solid transparent;
    font-size: 18px;
    padding: 20px 40px;
    font-weight: 600;
    border-radius: 5px;
    border: 1px solid transparent;
    line-height: 1;
    transition: all 0.3s ease-in-out;
}
.btn-primary:focus {
  box-shadow: none;
}
.btn-primary:hover {
  background-color: #333;
  border-color: #333;
}
</style>
