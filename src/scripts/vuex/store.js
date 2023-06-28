import vuex from 'vuex'
import { ref } from 'vue'

let userData = {
    name: "#USER_NAME",
    mail: "#USER_MAIL"
}


const store = new vuex.Store({
    state: ref({
        serverInfo: {},
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