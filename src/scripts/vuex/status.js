import vuex from 'vuex'
import { ref } from 'vue'

const status = new vuex.Store({
    state: ref({
        loading: true,
        isSiteLoaded: [false, false]
    }),
    getters: {
        isLoading(state) {
            return state.loading
        },
        isSiteLoaded(state) {
            return state.isSiteLoaded
        }
    },
    mutations: {
        loading(state, status) {
            state.loading = status
        },
        siteLoaded(state, isError) {
            state.isSiteLoaded = [true, isError]
        }
    }
})

export default status