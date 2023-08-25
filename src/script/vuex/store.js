import vuex from 'vuex'
import { ref } from 'vue'

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

const store = new vuex.Store({
    state: {
        serverInfo: serverInfo
    },
    getters: {
        serverInfo(state) {
            return state.serverInfo
        }
    },
    mutations: {
        setServerInfo(state, data) {
            state.serverInfo = data
        }
    }
})

export default store