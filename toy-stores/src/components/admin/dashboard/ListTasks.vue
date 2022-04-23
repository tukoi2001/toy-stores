<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown" class="me-5" v-if="role == 'admin' || role == 'super admin'">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card :color="item.color" dark>
        <v-card-title class="text-h6"> {{ item.title}} </v-card-title>
        <v-card-text class="white text--primary">
          <p class="timeline__des">
            {{ item.description }} 
          </p>
          <v-btn :color="item.color" class="mx-0" outlined> <router-link :to="item.url" style="text-decoration: none; color: #000">Go Now!</router-link> </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ListTasks",
  data: () => ({
    items: [
      {
        color: "red lighten-2",
        icon: "mdi-account",
        title: 'Users Management',
        description: 'Cùng tôi quản lý người dùng của Toyqo nào!',
        url: '/dashboard/users'
      },
      {
        color: "purple darken-1",
        icon: "mdi-book-variant",
        title: 'Products Management',
        description: 'Cùng tôi quản lý các sản phẩm của Toyqo nào!',
        url: '/dashboard/products'
      },
      {
        color: "green lighten-1",
        icon: "mdi-clipboard-list",
        title: 'Categories Management',
        description: 'Cùng tôi quản lý các danh mục sản phẩm của Toyqo nào!',
        url: '/dashboard/categories'
      },
      {
        color: "indigo",
        icon: "mdi-cart",
        title: 'Orders Management',
        description: 'Cùng tôi quản lý các đơn hàng của Toyqo nào!',
        url: '/dashboard/orders'
      },
      {
        color: "pink lighten-1",
        icon: "mdi-post",
        title: 'Blogs Management',
        description: 'Cùng tôi quản lý các bài viết của Toyqo nào!',
        url: '/dashboard/blogs'
      },
      {
        color: "yellow",
        icon: "mdi-phone-in-talk",
        title: 'Contact Management',
        description: 'Cùng tôi quản lý các phản hồi của Toyqo nào!',
        url: '/dashboard/contact'
      },
    ],
  }),
  computed: {
    ...mapState(['role']),
  }
};
</script>

<style scoped>
.timeline__des {
    font-size: 1rem!important;
    font-weight: 500;
    padding-top: 10px;
}
</style>
