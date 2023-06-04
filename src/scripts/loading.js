import __config from '@/main.js'

var loadBar = {
    start: () => {
        __config.loading = true
    },
    stop: () => {
        __config.loading = false
    }
}

export default loadBar