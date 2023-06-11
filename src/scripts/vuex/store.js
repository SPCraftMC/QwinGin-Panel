import vuex from 'vuex'
import { ref } from 'vue'
import settings from "@/settings";

const __config = ref({
    loading: false,
    settings
})

const store = new vuex.Store({
    state: {
        __config
    },
    getters: {
        __config(state) {
            return state.__config
        }
    },
    mutations: {
        loading(state) {
            if (state.__config.loading)
                return state.__config.loading = false
            else
            return state.__config.loading = true
        }
    }
})

export default store