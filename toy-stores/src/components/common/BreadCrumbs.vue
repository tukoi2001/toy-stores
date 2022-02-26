<template>
<div class="breadcrumb-box">
      <div class="container">
    <div class="breadcrumb-contents">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">
              <b-icon
                icon="house-door-fill"
                aria-hidden="true"
              ></b-icon
            ></router-link>
          </li>
          <li class="breadcrumb-item active">{{ title }}</li>
        </ol>
      </nav>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "BreadCrumbs",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
 .breadcrumb-box{
     padding: 5px 0;
    background-color: #00c4cc;
    margin-bottom: 80px;
 }
.breadcrumb-content ul li::before {
    position: absolute;
    width: 13px;
    height: 1px;
    background-color: #ffffff;
    content: "";
    right: -18px;
    top: 13px;
    z-index: 1;
    -webkit-transform: rotate(106deg);
    -ms-transform: rotate(106deg);
    transform: rotate(106deg);
}
.breadcrumb {
    background: transparent;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
    padding: 20px 0;
    margin-bottom: 0;
}
.breadcrumb-contents .breadcrumb .breadcrumb-item {
    font-size: 14px;
    color: #f9f9f9;
}
.breadcrumb-item a {
    text-decoration: none;
    color: #f9f9f9;
    transition: all 0.3s ease-in-out;
}
.breadcrumb-item a:hover {
    color: #ff99cc;
}
.breadcrumb-item + .breadcrumb-item::before {
    float: left;
    padding-right: 0.5rem;
    color: #f9f9f9
}

</style>