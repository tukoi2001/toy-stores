import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/user/Home.vue";
import { RoleMiddleware } from "../middleware/checkRole";
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
    path: "/blogs",
    name: "Blogs",
    component: () =>
      import(/* webpackChunkName: "blogs" */ "../views/user/Blogs.vue"),
    meta: {
      title: "Blogs",
    },
  },
  {
    path: "/blogs/:id",
    name: "BlogDetails",
    component: () =>
      import(
        /* webpackChunkName: "blog-details" */ "../views/user/BlogDetails.vue"
      ),
    meta: {
      title: "Blog Details",
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
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/user/Contact.vue"),
    meta: {
      title: "contact",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/auth/Register.vue"),
    meta: {
      requireLogin: true,
      title: "Register",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/auth/Login.vue"),
    meta: {
      requireLogin: true,
      title: "Login",
    },
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../views/auth/Logout.vue"),
    meta: {
      requireUser: true,
      title: "Logout",
    },
  },
  {
    path: "/verify-email",
    name: "VerifyEmail",
    component: () =>
      import(
        /* webpackChunkName: "verify-email" */ "../views/auth/VerifyEmail.vue"
      ),
    meta: {
      requireLogin: true,
      title: "Verify Email",
    },
  },
  {
    path: "/reset-password",
    name: "ResetPassword",
    component: () =>
      import(
        /* webpackChunkName: "verify-email" */ "../views/auth/ResetPassword.vue"
      ),
    meta: {
      requireLogin: true,
      title: "Reset Password",
    },
  },
  {
    path: "/me",
    name: "Me",
    component: () =>
      import(/* webpackChunkName: "me" */ "../views/user/Me.vue"),
    meta: {
      requireUser: true,
      title: "My Account",
    },
  },
  {
    path: "/categories/:all",
    name: "Shop",
    component: () =>
      import(
        /* webpackChunkName: "categories-all" */ "../views/user/Products.vue"
      ),
    meta: {
      title: "Shop",
    },
  },
  {
    path: "/categories/:id",
    name: "Shop By ID",
    component: () =>
      import(
        /* webpackChunkName: "categories-by-id" */ "../views/user/ProductsById.vue"
      ),
    meta: {
      title: "Shop",
    },
  },
  {
    path: "/products/:id",
    name: "Product By Category",
    component: () =>
      import(
        /* webpackChunkName: "product-detail" */ "../views/user/ProductDetail.vue"
      ),
    meta: {
      title: "Product Details",
    },
  },
  {
    path: "/products-search",
    name: "Search Products",
    component: () =>
      import(
        /* webpackChunkName: "product-detail" */ "../views/user/ProductSearch.vue"
      ),
    meta: {
      title: "Search Products",
    },
  },
  {
    path: "/cart",
    name: "Cart",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/user/Cart.vue"),
    meta: {
      requireUser: true,
      title: "Cart",
    },
  },
  {
    path: "/wishlist",
    name: "Wishlist",
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/user/Wishlist.vue"),
    meta: {
      requireUser: true,
      title: "Wishlist",
    },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () =>
      import(/* webpackChunkName: "checkout" */ "../views/user/Checkout.vue"),
    meta: {
      requireUser: true,
      title: "Checkout",
    },
  },
  {
    path: "/order-complete",
    name: "OrderComplete",
    component: () =>
      import(
        /* webpackChunkName: "order-complete" */ "../views/user/OrderComplete.vue"
      ),
    meta: {
      requireUser: true,
      title: "Order Complete",
    },
  },

  // Admin
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/admin/Dashboard.vue"
      ),
    meta: {
      title: "Dashboard",
    },
    beforeEnter: RoleMiddleware.admin,
  },
  {
    path: "/dashboard/categories",
    name: "Categories",
    component: () =>
      import(
        /* webpackChunkName: "categories" */ "../views/admin/Categories.vue"
      ),
    meta: {
      title: "Categories",
    },
    beforeEnter: RoleMiddleware.admin,
  },
  {
    path: "/dashboard/categories/:slug",
    name: "CategoriesDetail",
    component: () =>
      import(
        /* webpackChunkName: "category-detail" */ "../views/admin/CategoriesDetail.vue"
      ),
    meta: {
      title: "Category Detail",
    },
    beforeEnter: RoleMiddleware.admin,
  },
  {
    path: "/dashboard/products",
    name: "Products",
    component: () =>
      import(/* webpackChunkName: "products" */ "../views/admin/Products.vue"),
    meta: {
      title: "Products",
    },
    beforeEnter: RoleMiddleware.admin,
  },
  {
    path: "/dashboard/products/:slug",
    name: "ProductDetail",
    component: () =>
      import(
        /* webpackChunkName: "product-detail" */ "../views/admin/ProductsDetail.vue"
      ),
    meta: {
      title: "Product Detail",
    },
    beforeEnter: RoleMiddleware.admin,
  },
  {
    path: "/dashboard/orders",
    name: "Orders",
    component: () =>
      import(/* webpackChunkName: "orders" */ "../views/admin/Orders.vue"),
    meta: {
      title: "Orders",
    },
    beforeEnter: RoleMiddleware.admin,
  },
  {
    path: "/dashboard/orders/:id",
    name: "OrdersDetail",
    component: () =>
      import(
        /* webpackChunkName: "orders-detail" */ "../views/admin/OrdersDetail.vue"
      ),
    meta: {
      title: "Orders Detail",
    },
    beforeEnter: RoleMiddleware.admin,
  },
  {
    path: "/dashboard/users",
    name: "Users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/admin/Users.vue"),
    meta: {
      title: "Users",
    },
    beforeEnter: RoleMiddleware.admin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
      behavior: "smooth",
    };
  },
});

router.beforeEach((to, from, next) => {
  document.title = `Toyqo | ${to.meta.title}`;
  next();
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.requireUser) {
    const auth = JSON.parse(localStorage.getItem("token"));
    if (auth == "") {
      alert("Bạn cần đăng nhập để sử dụng chức năng này!");
      next({ path: "/login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin) {
    const login = JSON.parse(localStorage.getItem("token"));
    if (!login || login == "") {
      next();     
    } else {
      alert("Bạn đã đăng nhập rồi mà!");
      next({ path: "/" });
    }
  } else {
    next();
  }
});

export default router;
