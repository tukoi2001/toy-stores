<template>
  <!-- Single Post Details Content Start -->
  <div
    class="content"
  >
    <!-- Title Start -->
    <h2 class="title mb-3">
      TÁC DỤNG CỦA ĐỒ CHƠI TRẺ EM ĐỐI VỚI SỰ PHÁT TRIỂN CỦA BÉ
    </h2>
    <!-- Title End -->

    <!-- Meta List Start -->
    <div class="meta-list mb-3">
      <span>By <a href="#" class="meta-item author mr-1">Admin,</a></span>
      <span class="meta-item date">May 21, 2021</span>
      <span class="meta-item comment"><a href="#">03 Comments</a></span>
    </div>
    <!-- Meta List End -->

    <!-- Description Start -->
    <div class="desc">
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage.
      </p>

      <!-- Blockquote Start -->
      <blockquote class="blockquote mt-5 mb-5">
        <p>
          “Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock,”
        </p>
      </blockquote>
      <!-- Blockquote End -->

      <p>
        and going through the cites of the word in classical literature,
        discovered the undoubtable source. Lorem Ipsum comes from sections
        1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of
        Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
        the theory of ethics, very popular during the Renaissance. The first
        line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
        in section 1.10.32.
      </p>
    </div>
    <!-- Description End -->
  </div>
  <!-- Single Post Details Content End -->
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
.blog-details .content .meta-list a:hover {
    color: #00c4cc;
}
.blog-details .content .title {
    font-size: 24px;
    font-weight: 500;
}
.blog-details .content .meta-list {
    display: flex;
    flex-wrap: wrap;
    color: #555555;
    align-items: center;
}
.blog-details .content .meta-list a {
    text-transform: uppercase;
    font-weight: 500;
}
.blog-details .content .meta-list .meta-item {
    font-size: 14px;
    margin-right: 10px;
}
.blog-details .content .meta-list .meta-item + .meta-item::before {
    content: "|";
    margin-right: 10px;
}
.blog-details .content .desc > p {
    line-height: 2;
}
.blog-details .blockquote {
    position: relative;
    background-color: #f8f8f8;
    color: #555555;
    font-style: italic;
    margin: 25px 32px 25px 30px;
    padding: 25px;
    font-size: 16px;
}
.blog-details .blockquote:before {
    background-color: #00c4cc;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 5px;
}
.blockquote > :last-child {
    margin-bottom: 0;
}
</style>