<template>
  <div>
    <the-header />
    <bread-crumbs :title="'About page'"/>
    <about-section-start />
    <testimonials />
    <our-team-about />
    <the-footer />
    <the-last-footer />
  </div>
</template>

<script>
import AboutSectionStart from '../../components/about/AboutSectionStart.vue'
import OurTeamAbout from '../../components/about/OurTeamAbout.vue'
import BreadCrumbs from '../../components/common/BreadCrumbs.vue'
import TheFooter from '../../components/common/TheFooter.vue'
import TheHeader from '../../components/common/TheHeader.vue'
import TheLastFooter from '../../components/common/TheLastFooter.vue'
import Testimonials from '../../components/home/testimonials/Testimonials.vue'
export default {
  components: { TheHeader, BreadCrumbs, TheFooter ,TheLastFooter, AboutSectionStart, Testimonials, OurTeamAbout},

}
</script>

<s,
    TheLastFootertyle>

</style>
