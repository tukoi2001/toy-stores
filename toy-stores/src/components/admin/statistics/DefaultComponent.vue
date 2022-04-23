<template>
  <div class="default-component">
      <h3 class="title-df">Welcome to Statistics system of Toyqo Toy Store!!</h3>
      <p class="des-df">
          Sử dụng một vài thao tác đơn giản để thống kê doanh số, sản phẩm, đơn hàng,... chỉ với vài cú ckick 
          chuột hệ thống sẽ đưa ra kết quả cho quý khách. Hãy trải nghiệm nào!!!
      </p>
  </div>
</template>

<script>
export default {
    name: 'DefaultComponent'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two:wght@700&display=swap');
.default-component {
    padding: 50px 40px;
}
.title-df {
    font-family: 'Lobster Two', cursive;
    font-size: 3rem;
    margin-bottom: 40px;
    color: #62ab00;
    line-height: 1.25;
}
.des-df {
    font-family: cursive;
    font-size: 1.4rem;
    line-height: 1.75;
}
</style>