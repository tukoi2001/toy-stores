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
                          <h2 class="title">
                              Cho chúng tôi biết dự án của bạn
                          </h2>
                          <div class="contact-form-wrapper contact-form">
                              <form id="contact-form">
                                  <div class="row">
                                      <div class="col-12">
                                          <div class="row">
                                              <div class="col-md-6">
                                                  <div class="input-area mb-4">
                                                      <input type="text" class="input-item" placeholder="Tên Bạn" name="name">
                                                  </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="input-area mb-4">
                                                      <input type="text" class="input-item" placeholder="Email" name="email">
                                                  </div>
                                              </div>
                                              <div class="col-12">
                                                  <div class="input-area mb-4">
                                                      <input type="text" class="input-item" placeholder="Môn học" name="subject">
                                                  </div>
                                              </div>
                                              <div class="col-12">
                                                  <div class="input-area mb-8">
                                                      <textarea name="message" id="" cols="60" rows="5" placeholder="message" class="textarea-item"></textarea>
                                                  </div>
                                              </div>
                                              <div class="col-12">
                                                  <button type="submit" id="submit" name="submit" class="btn btn-secondary button-hover-primary">Gửi tin nhắn</button>
                                              </div>
                                              <p class="col-8 form-message mb-0"></p>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                  <div class="col-12 col-lg-6 mb-10 order-1 order-lg-2">
                      <div class="contact-title pb-3 aos-init aos-animate">
                          <h2 title="title">Liên hệ chúng tôi</h2>
                      </div>
                      <div class="contact-content">
                          <p>Sự rõ ràng cũng là một quá trình năng động dẫn đến sự thay đổi trong cách sử dụng của người đọc. Thật là tuyệt vời khi ghi nhận cách thức mà bức thư Gothic, mà chúng tôi nghĩ rằng bây giờ thích các hình thức văn học nhân loại ít rõ ràng hơn.</p>
                          <address class="contact-block">
                              <ul>
                                  <li>
                                      <i><b-icon icon="arrow-right-square-fill" aria-hidden="true"></b-icon></i>
                                      66 Võ Văn Tần, Chính Gián, Thanh Khê, Đà Nẵng
                                  </li>
                                  <li>
                                      <i><b-icon icon="telephone-fill" aria-hidden="true"></b-icon></i>
                                      <a href="tel:0922252632">0922252632</a>
                                  </li>
                                  <li>
                                      <i><b-icon icon="mailbox" aria-hidden="true"></b-icon></i>
                                      <a href="mailto:team3@gmail.com">team3@gmail.com</a>
                                  </li>
                              </ul>
                          </address>
                          <div class="working-time aos-init aos-animate">
                              <h6 class="title"> 
                                  Giờ làm việc
                              </h6>
                              <p>
                                  Monday – Saturday:08AM – 22PM
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
export default {

}
</script>

<style  scoped src="@/assets/css/components/contact/contact.css">

</style>