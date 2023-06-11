import store from "@/scripts/vuex/store";

var loadBar = {
    start: () => {
        store.loading = true
    },
    stop: () => {
        store.loading = false
    }
}

export default loadBar