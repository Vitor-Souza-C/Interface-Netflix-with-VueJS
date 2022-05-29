import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('../components/Layout.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: HomeView
        },
        {
          path: '/series',
          name: 'Series',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/series.vue')
        },
        {
          path: '/movies',
          name: 'Movies',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/movies.vue')
        }
      ]
    },
  ]
})

export default router
