<template>
  <div>
    <div class="breadcrumb-contents">
      <nav aria-label="breadcrumb">
        <ul class="breadcrumb">
          <li class="breadcrumb-item"><router-link to="/dashboard">Home</router-link></li>
          <li class="breadcrumb-item active">{{ title }}</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumbsAdmin",
  props: { 
    title: {
        type: String,
        default: ""
    }
  }
};
</script>

<style scoped>
.breadcrumb {
    background: transparent;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    border-radius: 0;
    padding: 15px 20px!important;
    background: #e9ecf2;
    margin: 0;
}
.breadcrumb-contents .breadcrumb .breadcrumb-item {
    font-size: 14px;
    color: #333;
}
.breadcrumb-item a {
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease-in-out;
}
.breadcrumb-item a:hover {
    color: #62ab00;
}
</style>
