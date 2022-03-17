<template>
  <!-- Blog Comments Form Start -->
  <div
    class="blog-comment-form-wrapper mt-10"
  >
    <!-- Blog Comment Form Title Start -->
    <div class="blog-comment-form-title">
      <h2 class="title">Leave a comment</h2>
    </div>
    <!-- Blog Comment Form Title End -->

    <!-- Comment Box Start -->
    <div class="comment-box">
      <form action="#">
        <div class="row">
          <!-- Message Input Start -->
          <div class="col-12 col-custom">
            <div class="input-item mt-4 mb-4">
              <textarea
                cols="30"
                rows="5"
                name="comment"
                class="rounded-0 w-100 custom-textarea input-area"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <!-- Message Input End -->

          <!-- Name Input Start -->
          <div class="col-md-6 col-custom">
            <div class="input-item mb-4">
              <input
                class="rounded-0 w-100 input-area name"
                type="text"
                placeholder="Name"
              />
            </div>
          </div>
          <!-- Name Input End -->

          <!-- Email Input Start -->
          <div class="col-md-6 col-custom">
            <div class="input-item mb-4">
              <input
                class="rounded-0 w-100 input-area email"
                type="text"
                placeholder="Email"
              />
            </div>
          </div>
          <!-- Email Input End -->

          <!-- Website Input Start -->
          <div class="col-12-6 col-custom">
            <div class="input-item mb-4">
              <input
                class="rounded-0 w-100 input-area name"
                type="text"
                placeholder="Website"
              />
            </div>
          </div>
          <!-- Website Input End -->

          <!-- Submit Button Start -->
          <div class="col-12 col-custom mt-4">
            <button type="submit" class="btn btn-primary btn-hover-dark">
              Post comment
            </button>
          </div>
          <!-- Submit Button End -->
        </div>
      </form>
    </div>
    <!-- Comment Box End -->
  </div>
  <!-- Blog Comments Form End -->
</template>

<script>
export default {};
</script>

<style scoped>
.btn {
    font-size: 15px;
    padding: 14px 30px;
    border-radius: 3px;
    border: 1px solid transparent;
    line-height: 1;
}
.btn-primary {
    border-color: #00c4cc;
    background-color: #00c4cc;
    color: #ffffff;
    background-color: #00c4cc;
    border: 1px solid transparent;
}
.btn:hover {
    color: #555555;
}
.btn-primary:hover {
    color: #000;
    background-color: #26cdd4;
    border-color: #1acad1;
}
.btn-hover-dark:hover {
    border-color: #222222;
    background-color: #222222;
    color: #ffffff;
}
.blog-comment-form-wrapper .title {
    font-size: 24px;
    font-weight: 700;
    color: #222222;
}
.blog-comment-form-wrapper .comment-box .input-area {
    padding: 10px 15px;
    background: #f8f8f8;
    border: 1px solid transparent;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
}
</style>