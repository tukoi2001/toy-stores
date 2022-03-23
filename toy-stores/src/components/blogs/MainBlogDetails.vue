<template>
  <div class="main-blog-details">
    <b-container>
      <b-row>
        <div class="col-lg-9 m-auto overflow-hidden text-left">
          <div class="blog-details mb-10">
            <blog-details-image/>
            <blog-details-content/>
            <blog-details-footer/>
          </div>
          <blog-comments-area/>
          <blog-comments-form/>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BlogCommentsArea from './BlogCommentsArea.vue';
import BlogCommentsForm from './BlogCommentsForm.vue';
import BlogDetailsContent from './single-post-details/BlogDetailsContent.vue';
import BlogDetailsFooter from './single-post-details/BlogDetailsFooter.vue';
import BlogDetailsImage from './single-post-details/BlogDetailsImage.vue';
export default {
  components: { BlogDetailsImage, BlogDetailsContent, BlogDetailsFooter, BlogCommentsArea, BlogCommentsForm },};
</script>

<style scoped>
.main-blog-details {
  margin: 80px 0;
}
</style>