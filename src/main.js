import 'mdui/dist/css/mdui.min.css'
import '@/assets/main.css'
import '@/assets/extra-settings.css'
import '@/assets/buttons.css'
import mdui from 'mdui'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import userdata from "@/scripts/axios/userdata";
import settings from "@/settings";
import store from "@/scripts/vuex/store";

const app = createApp(App)

// Vue Router
app.use(router)

// 挂载前端并初始化MDUI
app.mount('#app')
mdui.mutation()

// 请求数据
if (store.getters.mcskinToken !== "")
    userdata.req()

document.querySelector("title").innerText = settings.system.title
document.querySelector("#site-ico").href = settings.system.icon