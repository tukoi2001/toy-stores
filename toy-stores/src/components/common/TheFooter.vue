<template>
  <div>
      <div class="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <router-link to="/">
                        <img class="img-footer" src="@/assets/images/logo/logo.png" alt="logo">
                    </router-link>
                    <div class="footer__content">
                        <p class="footer_des">Hãy đến với chúng tôi, chúng tôi chuyên cung cấp các sản phẩm chính hãng! Cam kết 100%.</p>
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
                        <li class="footer__social">
                            <a href="https://www.facebook.com/tucute200" target="_blank"><b-icon icon="facebook"></b-icon></a>
                            <a href="" target="_blank"><b-icon icon="twitter"></b-icon></a>
                            <a href="" target="_blank"><b-icon icon="youtube"></b-icon></a> 
                            <a href="mailto:xuantu14112001@gmail.com" target="_blank"><b-icon icon="envelope-fill"></b-icon></a>
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
                    <div class="mb-5">
                         <form id="contact-form" @submit.prevent="handleContact" class="footer__form">
                            <div>
                                 <input type="email" class="form-control footer__input" mb-4 placeholder="demo@gmail.com" name="email" v-model.trim="email" required>
                            </div>
                            <div>
                                <button type="submit" class="footer__btn">Đăng ký</button> 
                            </div>
                        </form>
                        <p class="footer__success"  v-if="isSuccess" >Chúng tôi sẽ sớm gửi thông tin cho bạn!</p>
                    </div>
                     <p class="footer_des">
                        Tham gia để nhận được nội dung mới và miễn phí được phân phối tự động mỗi khi chúng tôi xuất bản.
                    </p>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import { ContactService, isPending, error, isSuccess } from "../../services/ContactService";
export default {
    name: 'TheFooter',
    setup() {
        return { error, isPending, isSuccess}
    },
    data() {
        return {
            email: ''
        }
    },
    methods: {
        async handleContact() {
            if (this.email !== '') {
                await ContactService.sendEmailInFo(this.email);
                this.email = '';
                setTimeout(() => {
                    this.isSuccess = false;
                }, 5000);
            } else {
                alert('Vui lòng nhập thông tin!');
            }
        },
    }
}
</script>

<style scoped src="@/assets/css/components/common/the-footer.css">

</style>