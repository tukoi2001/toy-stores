<template>
  <div>
    <header-admin />
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-2 sidebar">
                <side-bar-admin/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import HeaderAdmin from "../admin/HeaderAdmin.vue";
import SideBarAdmin from '../admin/SideBarAdmin.vue';
export default {
  components: { HeaderAdmin, SideBarAdmin },
  name: "AdminLayout",
};
</script>

<style scoped src="@/assets/css/components/admin/Admin.css"></style>
