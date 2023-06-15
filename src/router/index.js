import { createRouter, createWebHistory } from 'vue-router'
import loadBar from "@/scripts/loading";
import store from "@/scripts/vuex/store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    },
    {
      path: "/account",
      name: 'account',
      component: () => import('../views/Account.vue')
    },
    {
      path: "/about",
      name: "about",
      component: () => import('../views/About.vue')
    },
    {
      path: "/auth/login",
      name: "auth-login",
      component: () => import('../views/auth/Login.vue')
    },
    {
      path:'/:pathMatch(.*)',
      redirect: {
        name: "404"
      }
    }
  ]
})

router.beforeEach((to) => {
  loadBar.start()
  if (to.name !== "404" && to.name !== "auth-login") {
    if (store.getters.mcskinToken === "") router.push("/auth/login")
  }
})
router.afterEach(() => {
  loadBar.stop()
})

export default router
