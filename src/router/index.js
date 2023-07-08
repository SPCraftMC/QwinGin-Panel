import {createRouter, createWebHistory} from 'vue-router'
import loadBar from "@/scripts/loading";
import authinfo from "@/scripts/vuex/authinfo";
import mdui from "mdui";

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
        }, {
            path: "/auth/register",
            name: "auth-register",
            component: () => import('../views/auth/Register.vue')
        },
        {
            path: '/:pathMatch(.*)',
            redirect: {
                name: "404"
            }
        }
    ]
})

router.beforeEach((to) => {
    loadBar.start()
    if (
        to.name !== "404"
      && to.name !== "auth-login"
      && to.name !== "auth-register"
      && to.name !== "about"
      ) {
        if (authinfo.getters.token === "")
            router.push("/auth/login")
    } else {
        if (authinfo.getters.token !== "") {
            if (
                to.name === "auth-login"
                || to.name === "auth-register"
            ) {
                router.push("/")
                mdui.snackbar({
                    message: "您已完成鉴权，不需要再授权了！"
                })
            }
        }
    }
})
router.afterEach(() => {
    loadBar.stop()
})

export default router
