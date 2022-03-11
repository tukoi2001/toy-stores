import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/user/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/user/About.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/auth/Register.vue"),
    meta: {
      title: "Register",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/auth/Login.vue"),
    meta: {
      title: "Login",
    },
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/auth/Logout.vue"),
    meta: {
      requireAuth: true,
      title: "Logout",
    },
  },
  {
    path: "/verify-email",
    name: "VerifyEmail",
    component: () =>
      import(/* webpackChunkName: "verify-email" */ "../views/auth/VerifyEmail.vue"),
    meta: {
      title: "Verify Email",
    },
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () =>
      import(/* webpackChunkName: "verify-email" */ "../views/auth/ResetPassword.vue"),
    meta: {
      title: "Reset Password",
    },
  },
  {
    path: "/me",
    name: "Me",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/user/Me.vue"),
    meta: {
      requireAuth: true,
      title: "My Account",
    },
  },
  {
    path: "/categories/:all",
    name: "Shop",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/user/Products.vue"),
    meta: {
      title: "Shop",
    },
  },
  {
    path: "/categories/:id",
    name: "Shop By ID",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/user/ProductsById.vue"),
    meta: {
      title: "Shop",
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/admin/Dashboard.vue"),
    meta: {
      requireAuth: true,
      title: "Dashboard",
    },
  },
  {
    path: "/dashboard/categories",
    name: "Categories",
    component: () =>
      import(/* webpackChunkName: "categories" */ "../views/admin/Categories.vue"),
    meta: {
      requireAuth: true,
      title: "Categories",
    },
  },
  {
    path: "/dashboard/categories/:slug",
    name: "CategoriesDetail",
    component: () =>
      import(/* webpackChunkName: "category-detail" */ "../views/admin/CategoriesDetail.vue"),
    meta: {
      requireAuth: true,
      title: "Category Detail",
    },
  },
  {
    path: "/dashboard/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/admin/Products.vue"),
    meta: {
      requireAuth: true,
      title: "Products",
    },
  },
  {
    path: "/dashboard/products/:slug",
    name: "ProductDetail",
    component: () =>
      import(/* webpackChunkName: "product-detail" */ "../views/admin/ProductsDetail.vue"),
    meta: {
      requireAuth: true,
      title: "Product Detail",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `Toyqo | ${to.meta.title}`;
  next();
});

export default router;
