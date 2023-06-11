import { createRouter, createWebHistory } from 'vue-router'
import loadBar from "@/scripts/loading";

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
      path:'/:pathMatch(.*)',
      redirect: {
        name: "404"
      }
    }
  ]
})

router.beforeEach(() => {
  console.log("开始加载")
  loadBar.start()
})
router.afterEach(() => {
  console.log("结束加载")
  loadBar.stop()
})

export default router
