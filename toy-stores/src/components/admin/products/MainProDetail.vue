<template>
  <div class="row category__detail">
    <h2 class="main__title text-start">Product Details</h2>
    <div class="col-6">
        <h4 class="cate-detail-title text-start">Information Of Product:</h4>
      <ul class="text-start nav__cate">  
        <li>No: <strong>{{ productDetail.index }}</strong></li>
        <li>ID: <strong>{{ productDetail.id }}</strong></li>
        <li>Name: <strong>{{ productDetail.name }}</strong></li>
        <li>Slug: <strong>{{ productDetail.slug }}</strong></li>
        <li>Category Name: <strong>{{ productDetail.category }}</strong></li>
        <li>Description: <strong>{{ productDetail.description }}</strong></li>
        <li class="d-flex align-items-start">Sub Description: <strong v-html="productDetail.sub_description"></strong></li>
        <li>Quantity: <strong>{{ productDetail.quantity }}</strong></li>
        <li>Price: <strong>{{ productDetail.price }}</strong></li>
        <li>Sale Off: <strong>{{ productDetail.sale_off }}</strong></li>
        <li>Is New: <strong>{{ productDetail.isNew }}</strong></li>
        <li>Deleted: <strong>{{ productDetail.deleted === false ? 'False' : 'True' }}</strong></li>
        <li>Created At: <strong>{{ productDetail.createdAt }}</strong></li>
        <li>Updated At: <strong>{{ productDetail.updatedAt }}</strong></li>
        <li>Deleted At: <strong>{{ productDetail.deletedAt === null ? 'False' : productDetail.deletedAt }}</strong></li>
      </ul>
      <button type="button" class="btn btn-primary" @click="backTo">Back</button>
    </div>
    <div class="col-6 cate__img">
        <h4 class="cate-detail-title text-start">Image Of Product:</h4>
       <div class="row">
          <div class="col-6" v-for="(item, index) in listImage" :key="index">
            <img :src="item" alt="">  
          </div>
       </div>
    </div>
    
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MainProDetail",
  data() {
    return {
      listImage: []
    }
  },
  computed: {
    ...mapState("products", ["productDetail"]),
  },
  methods: {
      backTo() {
          this.$router.push("/dashboard/products");
      }
  },
  mounted() {
    this.listImage = this.productDetail.urlImage;
  }
};
</script>

<style
  scoped
  src="@/assets/css/components/admin/categories/Categories.css"
></style>
