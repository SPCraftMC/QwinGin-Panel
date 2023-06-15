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
    avatar: settings.system.yggdrasil_root + "/avatar/player/"
})

const store = new vuex.Store({
    state: {
        __config,
        __user,
        mcskin: {
            code: "",
            token: localStorage.__extend_mcskin_token || ""
        }
    },
    getters: {
        __config(state) {
            return state.__config
        },
        __user(state) {
            return state.__user
        },
        mcskinToken(state) {
            return state.mcskin.token
        },
        mcskinCode(state) {
            return state.mcskin.code
        }
    },
    mutations: {
        loading(state, status) {
            return state.__config.loading = status
        },
        ref_user(state, data) {
            console.log(data)
            state.__user = ref(data)
        },
        mcskin(state, code) {
            state.mcskin.code = code
        },
        mcskinX(state, token) {
            state.mcskin.token = token
            localStorage.__extend_mcskin_token = token
        }
    }
})

export default store