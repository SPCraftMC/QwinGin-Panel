import vuex from 'vuex'
import { ref } from 'vue'

let userData = {
    name: "#USER_NAME",
    mail: "#USER_MAIL"
}

let serverInfo = {
    "server_name": "EnShii-Daemon",
    "panel_info": {
        "name": "QwinGin-Panel",
        "icon": "/favicon.ico",
        "title": {
            "site": "「青镜」玩家管理面板",
            "menu": ""
        }
    }
}


const store = new vuex.Store({
    state: ref({
        serverInfo: serverInfo,
        oauthInfo: {},
        userData
    }),
    getters: {
        getServerInfo(state) {
            return state.serverInfo
        },
        getOauthInfo(state) {
            return state.oauthInfo
        },
        userData(state) {
            return userData
        }
    },
    mutations: {
        serverInfo(state, data) {
            state.serverInfo = data
        },
        oauthInfo(state, data) {
            state.oauthInfo = data
        }
    }
})

export default store