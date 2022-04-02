<template>
  <div>
     <user-layout>
      <bread-crumbs :title="'About Us'" />
      <about-section-start />
      <testimonials />
      <our-team-about />
    </user-layout>
  </div>
</template>

<script>
import BreadCrumbs from "../../components/common/BreadCrumbs.vue";
import AboutSectionStart from '../../components/about/AboutSectionStart.vue'
import OurTeamAbout from '../../components/about/OurTeamAbout.vue'
import Testimonials from '../../components/home/testimonials/Testimonials.vue'
import UserLayout from "../../components/layout/UserLayout.vue";
export default {
  components: {  AboutSectionStart, Testimonials, OurTeamAbout, BreadCrumbs, UserLayout },

}
</script>

<s,
    TheLastFootertyle>

</style>
