import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    // {
    //   path: '/register',
    //   name: 'Register',
    //   component: () => import(/* webpackChunkName: "register" */ '../views/auth/Register.vue')
    // },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/auth/Login.vue')
    },
    {
        path: '/me',
        name: 'Me',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/user/Me.vue'),
        meta: {
            requireAuth: true

        }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router