<template>
  <div
    class="content"
  >
    <h2 class="title mb-3">
      {{ blog.name }}
    </h2>
    <div class="meta-list mb-3">
      <span>By <a href="#" class="meta-item author mr-1">{{ blog.author }},</a></span>
      <span class="meta-item date">{{ blog.createdAt }}</span>
      <span class="meta-item comment"><a href="#">{{ blog.comment.length }} Comments</a></span>
    </div>
    <div class="desc">
      <blockquote class="blockquote mt-5 mb-5">
        <p>
          “{{ blog.sub_description }}”
        </p>
      </blockquote>
      <div v-html="blog.description" class="description">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'BlogDetailsContent',
  computed: {
    ...mapState('blogs', ['blog'])
  }
};
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
    font-size: 28px!important;
    font-weight: 500;
    color: #000;
    margin: 30px 0 20px!important;
    text-transform: uppercase;
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
    font-style: italic;
    margin: 25px 32px 25px 30px;
    padding: 25px;
}
.blockquote p {
  font-size: 16px;
  color: #333;
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
.description {
  font-size: 18px!important;
  color: #000;
}
.blockquote > :last-child {
    margin-bottom: 0;
}
.v-application p {
  font-size: 1rem!important;
}
b, strong {
    font-weight: bolder;
    font-size: 1rem!important;
}
</style>