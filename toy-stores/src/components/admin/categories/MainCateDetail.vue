<template>
  <div class="row category__detail">
    <h2 class="main__title text-start">Category Details</h2>
    <div class="col 8">
        <h4 class="cate-detail-title text-start">Information Of Category:</h4>
      <ul class="text-start nav__cate">  
        <li>No: <strong>{{ category.index }}</strong></li>
        <li>ID: <strong>{{ category.id }}</strong></li>
        <li>Name: <strong>{{ category.name }}</strong></li>
        <li>Slug: <strong>{{ category.slug }}</strong></li>
        <li>Description: <strong>{{ category.description }}</strong></li>
        <li>Deleted: <strong>{{ category.deleted === false ? 'False' : 'True' }}</strong></li>
        <li>Created At: <strong>{{ category.createdAt }}</strong></li>
        <li>Updated At: <strong>{{ category.updatedAt }}</strong></li>
        <li>Deleted At: <strong>{{ category.deletedAt ===null ? 'False' : category.deletedAt }}</strong></li>
      </ul>
      <button type="button" class="btn btn-primary" @click="backTo">Back</button>
    </div>
    <div class="col-4 cate__img">
        <h4 class="cate-detail-title text-start">Image Of Category:</h4>
        <img :src="category.urlImage" alt="">
    </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainCateDetail",
  computed: {
    ...mapState("categories", ["category"]),
  },
  methods: {
      backTo() {
          this.$router.push("/dashboard/categories");
      }
  }
};
</script>

<style
  scoped
  src="@/assets/css/components/admin/categories/Categories.css"
></style>
