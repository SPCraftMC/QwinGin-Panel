import vuex from 'vuex'
import { ref } from 'vue'

const store = new vuex.Store({
    state: ref({
        loading: true
    }),
    getters: {
        loading(state) {
            return state.loading
        }
    },
    mutations: {
        loading(state, status) {
            state.loading = status
        }
    }
})

export default statuz