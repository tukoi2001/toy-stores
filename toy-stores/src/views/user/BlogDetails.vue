<template>
  <div>
      <user-layout>
          <bread-crumbs :title="`Blog Details `"/>
          <main-blog-details/>
      </user-layout>
  </div>
</template>

<script>
import MainBlogDetails from '../../components/blogs/MainBlogDetails.vue'
import BreadCrumbs from '../../components/common/BreadCrumbs.vue'
import UserLayout from '../../components/layout/UserLayout.vue'
export default {
  components: { UserLayout, BreadCrumbs, MainBlogDetails },

}
</script>

<style>

</style>