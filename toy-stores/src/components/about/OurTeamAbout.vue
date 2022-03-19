<template>
  <div>
      <div class="section section-margin">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="section-title text-center">
                          <h2 class="title">Thành viên của chúng tôi</h2>
                          <p class="sub-title">Vì sự vui chơi và phát triển của trẻ em  </p>
                      </div>
                  </div>
              </div>
              <div class="row mb-n6">
                <div class="col-xl-2dot4 .col-lg-2dot4 col-md-2dot4" v-for="(item, index) in members" :key="index">
                    <div class="single-team-member text-center mb-6">
                        <div class="team-thumb">
                            <img class="fit-image" :src="item.img" alt="Team Image">
                            <div class="team-social">
                                <a :href="item.linkFb" target="_blank">
                                    <b-icon icon="facebook"></b-icon>
                                </a>
                                <a href="#"><b-icon icon="linkedin"></b-icon></a>
                                <a href="#"><b-icon icon="twitter"></b-icon></a>
                            </div>
                        </div>
                        <div class="team-content">
                            <h6 class="team-member-name">{{item.name}}</h6>
                            <p>{{item.role}}</p>
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
    data() {
        return {
            members: [
                {
                    img: require("@/assets/images/about-us/tu.jpg"),
                    role: 'Developer',
                    name: 'Tú Xuân',
                    linkFb: 'https://www.facebook.com/tucute200/'
                },
                {
                    img: require("@/assets/images/about-us/phong.jpg"),
                    role: 'Developer',
                    name: 'Lê Văn Phong',
                    linkFb: 'https://www.facebook.com/phong.levan.5815255'
                },
                 {
                    img: require("@/assets/images/about-us/long.jpg"),
                    role: 'Developer',
                    name: 'Võ Hoàng Long',
                    linkFb: 'https://www.facebook.com/longrui.09'
                },
                 {
                    img: require("@/assets/images/about-us/vi.jpg"),
                    role: 'Tester',
                    name: 'Tường Vi',
                    linkFb: 'https://www.facebook.com/Tuongvi.2388'
                },
                {
                    img: require("@/assets/images/about-us/vanh.jpg"),
                    role: 'Designer/Tester',
                    name: 'Nguyễn Văn Anh',
                    linkFb: 'https://www.facebook.com/nvananht.1002'
                },
            ]
        }
    }
}
</script>

<style scoped src="@/assets/css/components/about/ourteam.css">

</style>