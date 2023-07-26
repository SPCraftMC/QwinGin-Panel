// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/views/Account.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/blacklist',
    name: 'blacklist',
    component: () => import('@/views/BLacklist.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: {
        name: '404'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
