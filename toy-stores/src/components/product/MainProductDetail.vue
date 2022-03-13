<template>
  <div class="container">
      <div class="row text-start">
          <div class="col-md-5">
              <prod-details-image/>
          </div>
          <div class="col-md-7">
              <prod-details-content/>
          </div>
            <div class="col-12">
                <service-product/>
                <description-prod/>
                <product-relation/>
            </div> 
      </div>
  </div>
</template>

<script>
import DescriptionProd from './DescriptionProd.vue'
import ProdDetailsContent from './ProdDetailsContent.vue'
import ProdDetailsImage from './ProdDetailsImage.vue'
import ProductRelation from './ProductRelation.vue'
import ServiceProduct from './ServiceProduct.vue'
export default {
  components: { ProdDetailsImage, ProdDetailsContent, ServiceProduct, DescriptionProd, ProductRelation },
    name: 'MainProductDetail'
}
</script>

<style scoped>

</style>