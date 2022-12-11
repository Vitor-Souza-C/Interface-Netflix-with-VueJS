import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '../components/Layout.vue'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
    ,
    {
        path: '/login',
        name: 'login',
        component: Login,
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
                        /* webpackChunkName: "series" */ '../views/Series.vue'
                    ),
            },
            {
                path: '/movies',
                name: 'movies',
                component: () =>
                    import(
                        /* webpackChunkName: "movies" */ '../views/Movies.vue'
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
