import vuex from 'vuex'
import { ref } from 'vue'

let userData = {
    name: "#USER_NAME",
    mail: "#USER_MAIL"
}

let serverInfo = ref({
    "server_name": "LOAD",
    "panel_info": {
        "name": "LOAD",
        "icon": "/favicon.ico",
        "title": {
            "site": "「青镜」玩家管理面板",
            "menu": ""
        }
    }
})

let captchaInfo = {
    enable: false,
    site_key: ""
}

let oauthInfo = {}

let blackListUsers = {}

let blackListInfo = {}


const store = new vuex.Store({
    state: ref({
        serverInfo: serverInfo,
        oauthInfo: oauthInfo,
        captchaInfo: captchaInfo,
        blackListUsers: blackListUsers,
        blackListInfo: blackListInfo,
        userData
    }),
    getters: {
        getServerInfo(state) {
            return state.serverInfo
        },
        getOauthInfo(state) {
            return state.oauthInfo
        },
        getCaptchaInfo(state) {
            return state.captchaInfo
        },
        userData(state) {
            return userData
        },
        getBlackListUsers(state) {
          return state.blackListUsers
        },
        getBlackListInfo(state) {
          return state.blackListInfo
        }
    },
    mutations: {
        serverInfo(state, data) {
            state.serverInfo = data
        },
        oauthInfo(state, data) {
            state.oauthInfo = data
        },
        captchaInfo(state, data) {
            state.captchaInfo = data
        },
        updateBlackListUsers(state, data) {
          state.blackListUsers = data
        },
        updateBlackListInfo(state, data) {
          state.blackListInfo = data
        }
    }
})

export default store
