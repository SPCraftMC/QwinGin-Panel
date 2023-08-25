import vuex from 'vuex'
import { ref } from 'vue'
import md5 from 'js-md5'

let serverInfo = ref({
    server_name: "LOAD",
    panel_info: {
        name: "LOAD",
        icon: "/favicon.ico",
        title: {
            site: "「青镜」玩家管理面板",
            menu: ""
        }
    }
})

let userInfo = ref({
    name: "#USERNAME",
    email: "#USEREMAIL",
    avatar: {
        gravatar: "https://cravatar.cn/avatar/",
        skin: "#SKINAVATAR"
    }
})

const store = new vuex.Store({
    state: {
        serverInfo: serverInfo,
        userInfo: userInfo
    },
    getters: {
        serverInfo(state) {
            return state.serverInfo
        },
        userInfo(state) {
            return state.userInfo
        }
    },
    mutations: {
        setServerInfo(state, data) {
            state.serverInfo = data
        },
        setUserInfo(state, data) {
            state.userInfo = data
        }
    }
})

export default store