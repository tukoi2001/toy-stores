<template>
  <!-- Comments Area Wrapper Start -->
  <div
    class="comment-area-wrapper mt-5"
  >
    <!-- Title Start -->
    <h3 class="title mb-6">3 Comments</h3>
    <!-- Title End -->

    <!-- Single Comment Wrapper Start -->
    <div class="single-comment-wrap mb-6 bg-milky">
      <a class="author-thumb" href="#">
        <img src="@/assets/images/user/empty.jpg" alt="Author" />
      </a>
      <div class="comments-info">
        <p class="mb-1">
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet
        </p>
        <div class="comment-footer d-flex justify-content-between">
          <span class="author"
            ><a href=""><strong>Duy</strong></a> - July 30, 2021</span
          >
          <a href="#" class="btn-reply"><b-icon icon="reply-fill"></b-icon> Reply</a>
        </div>
      </div>
    </div>
    <!-- Single Comment Wrapper End -->

    <!-- Single Comment Wrapper Start -->
    <div class="single-comment-wrap mb-6 comment-reply bg-milky">
      <a class="author-thumb" href="#">
        <img src="@/assets/images/user/empty.jpg" alt="Author" />
      </a>
      <div class="comments-info">
        <p class="mb-1">
          Praesent bibendum risus pellentesque faucibus rhoncus. Etiam a mollis
          odio. Integer urna nisl, fermentum eu mollis et, gravida eu elit.
        </p>
        <div class="comment-footer d-flex justify-content-between">
          <span class="author"
            ><a href=""><strong>Alex</strong></a> - August 30, 2021</span
          >
          <a href="#" class="btn-reply"><b-icon icon="reply-fill"></b-icon> Reply</a>
        </div>
      </div>
    </div>
    <!-- Single Comment Wrapper End -->

    <!-- Single Comment Wrapper Start -->
    <div class="single-comment-wrap bg-milky">
      <a class="author-thumb" href="#">
        <img src="@/assets/images/user/empty.jpg" alt="Author" />
      </a>
      <div class="comments-info">
        <p class="mb-1">
          Praesent bibendum risus pellentesque faucibus rhoncus. Etiam a mollis
          odio. Integer urna nisl, fermentum eu mollis et, gravida eu elit.
        </p>
        <div class="comment-footer d-flex justify-content-between">
          <span class="author"
            ><a href=""><strong>Tuntuni</strong></a> - September 10, 2021</span
          >
          <a href="#" class="btn-reply"><b-icon icon="reply-fill"></b-icon> Reply</a>
        </div>
      </div>
    </div>
    <!-- Single Comment Wrapper End -->
  </div>
  <!-- Comments Area Wrapper End -->
</template>

<script>
export default {};
</script>

<style scoped>
a, a:hover, a:focus, a:active, button, button:focus, .btn, .btn:focus, input, input:focus, select, textarea {
    transition: all 0.5s ease 0s;
    color: #222222;
    text-decoration: none;
    outline: 0;
    background: none;
}
a:hover {
    color: #00c4cc;
}
.comment-area-wrapper .title {
    font-size: 24px;
    font-weight: 700;
    color: #222222;
}
.comment-area-wrapper .single-comment-wrap {
    background: #f7f7f7;
    display: flex;
    flex-direction: row;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 20px;
}
.comment-area-wrapper .single-comment-wrap.comment-reply {
    margin-left: 50px;
}
.comment-area-wrapper .single-comment-wrap .author-thumb {
    margin-right: 10px;
    width: 80px;
    height: 80px;
}
.comment-area-wrapper .single-comment-wrap .author-thumb img {
    width: 100%;
    border-radius: 10px;
}
.comment-area-wrapper .single-comment-wrap .comments-info {
    width: 90%;
}
.comment-area-wrapper .single-comment-wrap .comments-info .author {
    font-size: 12px;
}
.comment-area-wrapper .single-comment-wrap .comments-info .author a {
    font-size: 14px;
}
.comment-area-wrapper .single-comment-wrap .comments-info .btn-reply {
    font-size: 12px;
}
</style>