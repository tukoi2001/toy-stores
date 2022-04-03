<template>
  <div>
      <div class="map">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9669801135324!2d108.20058031477791!3d16.067203188882214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142184d687c0ddd%3A0x532210d879f8c3d1!2zNjYgVsO1IFbEg24gVOG6p24sIENow61uaCBHacOhbiwgVGhhbmggS2jDqiwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1647519064681!5m2!1svi!2s" width="100%" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <div class="section section-margin">
          <div class="container">
              <div class="row mb-n10">
                  <div class="col-12 col-lg-6 mb-10 order-2 order-lg-1">
                      <div class="contact-title pb-3">
                          <h2 class="title-main">
                              Liên hệ với chúng tôi
                          </h2>
                          <div class="contact-form-wrapper contact-form mt-5">
                              <form id="contact-form" @submit.prevent="handleContact">
                                  <div class="row">
                                      <div class="col-12">
                                          <div class="row">
                                              <p class="note"> * Bắt buộc</p>
                                              <div class="col-md-6">
                                                  <div class="input-area mb-4">
                                                      <input type="text" class="input-item" placeholder="Tên Bạn (*)" name="name" v-model.trim="dataForm.fullName" required autofocus pattern=".{2,}" maxLength="30">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="input-area mb-4">
                                                      <input type="text" class="input-item" placeholder="Email (*)" name="email" v-model.trim="dataForm.email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                                                  </div>
                                              </div>
                                              <div class="col-12">
                                                  <div class="input-area mb-8">
                                                      <textarea name="message" id="" cols="60" rows="5" placeholder="Tin nhắn (*)" class="textarea-item" v-model.trim="dataForm.message" required minlength="20" maxLength="150"></textarea>
                                                  </div>
                                              </div>
                                              <div class="col-12">
                                                  <button v-if="isPending" type="submit" id="submit" name="submit" class="btn btn-loading" disabled>Loading...</button>
                                                  <button v-else type="submit" id="submit" name="submit" class="btn btn-secondary">Gửi tin nhắn</button>
                                              </div>
                                              <p class="col-12 form-message mt-10" v-if="isSuccess">Tin nhắn của bạn đã được gửi cho quản lý. Cảm ơn quý khách đã phản hồi!</p>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-lg-6 mb-10 order-1 order-lg-2">
                      <div class="contact-title pb-3 aos-init aos-animate">
                          <h2 class="title-main">Liên hệ chúng tôi</h2>
                      </div>
                      <div class="contact-content">
                          <p class="contact-des">Nếu quý khách hàng có khiếu nại hay cần sự giúp đỡ hãy liên hệ với chúng tôi.</p>
                          <address class="contact-block">
                              <ul>
                                  <li class="contact-des">
                                      <i><b-icon icon="arrow-right-square-fill" aria-hidden="true"></b-icon></i>
                                      66 Võ Văn Tần, Chính Gián, Thanh Khê, Đà Nẵng
                                  </li>
                                  <li class="contact-des">
                                      <i><b-icon icon="telephone-fill" aria-hidden="true"></b-icon></i>
                                      <a href="tel:0922252632">0922252632</a>
                                  </li>
                                  <li class="contact-des">
                                      <i><b-icon icon="mailbox" aria-hidden="true"></b-icon></i>
                                      <a href="mailto:team3@gmail.com">team3@gmail.com</a>
                                  </li>
                              </ul>
                          </address>
                          <div class="working-time aos-init aos-animate">
                              <h6 class="title-main"> 
                                  Giờ làm việc
                              </h6>
                              <p class="contact-des">
                                  Monday – Saturday: 08AM – 22PM
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { ContactService, isPending, error, isSuccess } from "../../services/ContactService";
import { mapState } from "vuex";
export default {
    name: 'Contact',
    setup() {
        return { error, isPending, isSuccess}
    },
    data() {
        return {
            dataForm: {
                email: '',
                fullName: '',
                message: '',
            }
        }
    },
    computed: {
        ...mapState('users', ['userInformation'])
    },
    methods: {
        async handleContact() {
            if (this.dataForm.email !== '' && this.dataForm.fullName !== '' && this.dataForm.message !== '') {
                await ContactService.sendEmail(this.dataForm);
                this.dataForm.message = '';
                setTimeout(() => {
                    this.isSuccess = false;
                }, 5000);
            } else {
                alert('Vui lòng nhập thông tin!');
            }
        },
    },
    mounted() {
       setTimeout( () => {
            this.dataForm.email = this.userInformation.multiFactor.user.email;
            this.dataForm.fullName = this.userInformation.multiFactor.user.displayName;
       }, 1500);
        
    }
}
</script>

<style  scoped src="@/assets/css/components/contact/contact.css">

</style>