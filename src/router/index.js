// Composables
import { createRouter, createWebHistory } from 'vue-router'
/*import loadBar from "@/scripts/loading";
import authinfo from "@/scripts/vuex/authinfo";*/

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
    component: () => import('@/views/Blacklist.vue')
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
