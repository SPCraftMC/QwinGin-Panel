import vuex from 'vuex'
import { ref } from 'vue'

const authinfo = new vuex.Store({
    state: ref({
        token:  localStorage.QGP_token || "" 
    }),
    getters: {
        token(state) {
            return state.token
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.QGP_token = token
        }
    }
})

export default authinfo