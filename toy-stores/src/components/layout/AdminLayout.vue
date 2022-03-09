<template>
  <div>
    <header-admin />
    <div class="container-fluid">
        <div class="row" style="margin-top: 74px;">
            <div class="col-sm-2 sidebar">
                <side-bar-admin/>
            </div>
            <div class="col-sm-10 p-0">
              <slot></slot>
             <footer-admin/>              
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import FooterAdmin from '../admin/FooterAdmin.vue';
import HeaderAdmin from "../admin/HeaderAdmin.vue";
import SideBarAdmin from '../admin/SideBarAdmin.vue';
export default {
  components: { HeaderAdmin, SideBarAdmin, FooterAdmin },
  name: "AdminLayout",
};
</script>

<style scoped src="@/assets/css/components/admin/Admin.css"></style>
