<template>
  <div>
      <user-layout>
          <bread-crumbs :title="`Blog Details  /  ${title}`"/>
          <main-blog-details/>
      </user-layout>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MainBlogDetails from '../../components/blogs/MainBlogDetails.vue'
import BreadCrumbs from '../../components/common/BreadCrumbs.vue'
import UserLayout from '../../components/layout/UserLayout.vue'
export default {
  name: 'BlogDetails',
  components: { UserLayout, BreadCrumbs, MainBlogDetails },
  data() {  
    return { 
      title: ''
    }
  },
  created() {
    const blog = JSON.parse(localStorage.getItem('blogDetail'));
    this.actionSetBlogDetail(blog);
  },
  computed: { 
    ...mapState('blogs', ['blog'])
  },
  methods: {
    ...mapActions('blogs', ['actionSetBlogDetail'])
  },
  mounted() {
    this.title = this.blog.name;
  }
}
</script>

<style>

</style>