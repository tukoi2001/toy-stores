<template>
  <!-- Single Post Details Footer Start -->
  <div
    class="single-post-details-footer mt-10"
  >
    <!-- Shear Article Start -->
    <div class="share-article">
      <span class="left-side">
        <a href="#"> <b-icon icon="caret-left-fill"></b-icon> Older Post</a>
      </span>
      <h6 class="share-title text-uppercase">Share this article</h6>
      <span class="right-side">
        <a href="#">Newer Post <b-icon icon="caret-right-fill"></b-icon></a>
      </span>
    </div>
    <!-- Shear Article Start -->
    <!-- Social Shear Start -->
    <div class="widget-social border-top pt-2">
      <a title="Facebook" href="#"><b-icon icon="facebook"></b-icon></a>
      <a title="Twitter" href="#"><b-icon icon="twitter"></b-icon></a>
      <a title="Linkedin" href="#"><b-icon icon="linkedin"></b-icon></a>
      <a title="Youtube" href="#"><b-icon icon="youtube"></b-icon></a>
    </div>
    <!-- Social Shear Start -->
  </div>
  <!-- Single Post Details Footer End -->
</template>

<script>
export default {};
</script>

<style scoped>
a, a:hover, a:focus, a:active, button, button:focus, .btn, .btn:focus, input, input:focus, select, textarea {
    transition: all 0.5s ease 0s;
    color: inherit;
    text-decoration: none;
    outline: 0;
    background: none;
}
.blog-details .share-article {
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
}
.blog-details .share-article .left-side {
    float: left;
}
.blog-details .share-article .right-side {
    float: right;
}
.left-side a:hover, .right-side a:hover {
    color: #00c4cc;
}
.blog-details .widget-social {
    text-align: center;
}
.widget-social a {
    font-size: 18px;
    padding: 5px;
    color: #555555;
}
.widget-social a:hover {
    color: #000;
}
</style>