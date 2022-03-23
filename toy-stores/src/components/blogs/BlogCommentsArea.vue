<template>
  <div class="comment-area-wrapper mt-5">
    <h3 class="title mb-6">{{ blog.comment.length }} Bình luận</h3>
    <div
      class="single-comment-wrap mb-6 bg-milky"
      v-for="(item, index) in listComments"
      :key="index"
    >
      <div class="author-thumb">
        <img :src="item.photoURL" alt="Author" />
      </div>
      <div class="comments-info">
        <p class="mb-1">
          {{ item.content }}
        </p>
        <div class="comment-footer d-flex justify-content-between">
          <span class="author"
            ><a href=""
              ><strong>{{ item.name }}</strong></a
            >
            - {{item.publishedAt}}</span 
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BlogCommentsArea",
  data() {
    return {
      listComments: [],
    };
  },
  computed: {
    ...mapState("blogs", ["blog"]),
  },
  methods: {
  
  },
  mounted() {
    this.listComments = this.blog.comment;
  },
};
</script>

<style scoped>
a,
a:hover,
a:focus,
a:active,
button,
button:focus,
.btn,
.btn:focus,
input,
input:focus,
select,
textarea {
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
