import __config from '@/main.js'
import { ref } from 'vue'

var loadBar = {
    start: () => {
        __config.loading = ref(true)
    },
    stop: () => {
        __config.loading = ref(false)
    }
}

export default loadBar