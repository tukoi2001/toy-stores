<template>
  <div
    class="blog-comment-form-wrapper mt-10"
  >
    <div class="blog-comment-form-title">
      <h2 class="title">Để lại bình luận:</h2>
    </div>
    <div class="comment-box">
      <form action="" @submit.prevent="postComment(blog.id)">
        <div class="row">
          <div class="col-12 col-custom">
            <div class="input-item mt-4 mb-4">
              <textarea
                v-model.trim="comment"
                cols="30"
                rows="5"
                name="comment"
                class="w-100 custom-textarea input-area"
                placeholder="Comment..."
              ></textarea>
            </div>
          </div>
          <div class="col-12 col-custom mt-4">
            <button type="submit" class="btn btn-primary btn-hover-dark">
              Bình luận
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { BlogService, isPending, error } from "../../services/BlogService";
import { mapActions, mapState } from 'vuex';
export default {
  name: 'BlogCommentsForm',
  setup() {
    return { error, isPending }
  },
  data() {
    return {
      comment: '',
      data: []
    }
  },
  computed: {
    ...mapState('users', ['userInformation']),
    ...mapState('blogs', ['blog'])
  },
  methods:{
    ...mapActions('blogs', ['actionSetBlogDetail']),
    async postComment(item) {
      this.data.push({
        id: item,
        content: this.comment,
        name: this.userInformation.multiFactor.user.displayName,
        photoURL: this.userInformation.multiFactor.user.photoURL,
        publishedAt: new Date().toLocaleDateString()
      });
      const res = await BlogService.comment(this.data);
      if(res) {
        this.comment = '';
      }
    },
  },
  mounted() {
    this.data = this.blog.comment;
    console.log(this.data);
  }
};
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
    background: #d3d6db;
    border: 1px solid transparent;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    border-radius: 10px!important;
    font-size: 1rem;
}
</style>