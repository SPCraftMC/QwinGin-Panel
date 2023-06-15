import vuex from 'vuex'
import { ref } from 'vue'
import settings from "@/settings";

// 基本配置
const __config = ref({
    loading: false,
    settings,
    announcement: "#Announcement"
})
// 基本用户数据结构
const __user = ref({
    name: "#User_Name",
    mail: "#User_Mail",
    token: ""
})

const store = new vuex.Store({
    state: {
        __config,
        __user
    },
    getters: {
        __config(state) {
            return state.__config
        },
        __user(state) {
            return state.__user
        }
    },
    mutations: {
        loading(state, status) {
            return state.__config.loading = status
        },
        ref_user(state, data) {
            state.__user.name = data.name
        }
    }
})

export default store