<template>
  <div class="row category__detail">
    <h2 class="main__title text-start">Blog Details</h2>
    <div class="col 8">
      <h4 class="cate-detail-title text-start">Information Of Blog:</h4>
      <ul class="text-start nav__cate">
        <li>
          No: <strong>{{ blog.index }}</strong>
        </li>
        <li>
          ID: <strong>{{ blog.id }}</strong>
        </li>
        <li>
          Name: <strong>{{ blog.name }}</strong>
        </li>
        <li>
          Slug: <strong>{{ blog.slug }}</strong>
        </li>
         <li>
          Author: <strong>{{ blog.author }}</strong>
        </li>
        <li>
          Sub Description: <strong>{{ blog.sub_description }}</strong>
        </li>
        <li>
          Description: <strong>{{ blog.description }}</strong>
        </li>
        <li>
          Created At: <strong>{{ blog.createdAt }}</strong>
        </li>
        <li>
          Updated At: <strong>{{ blog.updatedAt }}</strong>
        </li>
      </ul>
      <button type="button" class="btn btn-primary" @click="backTo">
        Back
      </button>
    </div>
    <div class="col-4 cate__img">
      <h4 class="cate-detail-title text-start">Image Of Blog:</h4>
      <img :src="blog.urlImage" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainBlogDetail",
  computed: {
    ...mapState("blogs", ["blog"]),
  },
  methods: {
    backTo() {
      this.$router.push("/dashboard/blogs");
    },
  },
};
</script>

<style
  scoped
  src="@/assets/css/components/admin/categories/Categories.css"
></style>
