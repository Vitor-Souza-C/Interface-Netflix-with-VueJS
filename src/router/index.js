import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/pages/HomeView.vue'
import Layout from '../components/Layout.vue'
import Login from '../views/pages/auth/Login.vue'
import LayoutAuth from '../components/login/LayoutAuth.vue'
import Register from '../views/pages/auth/Register.vue'
import ForgotPassword from '../views/pages/auth/ForgotPassword.vue'
import RedefinePassword from '../views/pages/auth/RedefinePassword.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/auth',
        component: LayoutAuth,
        children: [
            {
                path: 'login',
                component: Login,
            },
            {
                path: 'forgot-password',
                component: ForgotPassword,
            },
            {
                path: 'register',
                component: Register,
            },
            {
                path: 'redefine-password',
                component: RedefinePassword,
            },
        ],
    },
    {
        path: '/',
        name: 'layout',
        component: Layout,
        children: [
            {
                path: '/',
                name: 'home',
                component: HomeView,
            },
            {
                path: '/series',
                name: 'series',
                component: () =>
                    import(
                        /* webpackChunkName: "series" */ '../views/pages/Series.vue'
                    ),
            },
            {
                path: '/movies',
                name: 'movies',
                component: () =>
                    import(
                        /* webpackChunkName: "movies" */ '../views/pages/Movies.vue'
                    ),
            },
        ],
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
