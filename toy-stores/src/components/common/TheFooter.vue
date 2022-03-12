<template>
  <div>
      <div class="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <h3 class="footer__title">Về chúng tôi</h3>
                    <p class="footer__des">
                        Chúng tôi là một nhóm các nhà thiết kế và nhà phát triển tạo ra wordpress, shopify, Opencart chất lượng cao
                    </p>
                    <div class="footer__social">
                        <a href="https://www.facebook.com/tucute200" target="_blank"><b-icon icon="facebook"></b-icon></a>
                        <a href="" target="_blank"><b-icon icon="twitter"></b-icon></a>
                        <a href="" target="_blank"><b-icon icon="linkedin"></b-icon></a>
                        <a href="" target="_blank"><b-icon icon="youtube"></b-icon></a>
                        <a href="mailto:team3@gmail.com" target="_blank"><b-icon icon="envelope-fill"></b-icon></a>
                    </div>
                </div>

                <div class="col-md-3">
                    <h3 class="footer__title">Liên lạc</h3>
                    <ul class="footer__contact">
                        <li class="footer__contact-item">
                            <b-icon class="footer__contact-icon" icon="house-door"></b-icon>
                            <span>Hai Chau, Da Nang</span>
                        </li>
                        <li class="footer__contact-item">
                            <b-icon class="footer__contact-icon" icon="envelope"></b-icon>
                            <a href="mailto:team3@gmail.com">team3@gmail.com</a>
                        </li>
                        <li class="footer__contact-item">
                            <b-icon class="footer__contact-icon" icon="telephone"></b-icon>
                            <a href="tel:03333666959">03333666959</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <h3 class="footer__title">Chính sách</h3>
                    <ul class="footer__contact">
                        <li class="footer__contact-item">
                            <a href="">Điều khoản và điều kiện</a>
                        </li>
                        <li class="footer__contact-item">
                            <a href="">Phương thức thanh toán</a>
                        </li>
                        <li class="footer__contact-item">
                            <a href="">Bảo hành sản phẩm</a>
                        </li>
                        <li class="footer__contact-item">
                            <a href="">Quy trình trả hàng</a>
                        </li>
                        <li class="footer__contact-item">
                            <a href="">Bảo mật thanh toán</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-3">
                    <h3 class="footer__title">Đăng ký để nhận thông tin</h3>
                    <div class="footer__newletter mb-4">
                        <form submit.prevent="" class="footer__form">
                            <input type="email" class="form-control footer__input" mb-4 placeholder="demo@gmail.com" name="email">
                            <button type="submit" class="footer__btn">Đăng ký</button> 
                        </form>
                    </div>
                     <p class="footer__des">
                        Tham gia cùng hơn 1.000 người, những người nhận được nội dung mới và miễn phí được phân phối tự động mỗi khi chúng tôi xuất bản
                    </p>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped src="@/assets/css/components/common/the-footer.css">

</style>