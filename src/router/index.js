import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('../views/404View.vue')
    },
    {
      path: '/favoritos',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: AboutView
    },
  ]
})

export default router
