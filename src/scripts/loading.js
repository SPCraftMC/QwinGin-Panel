import store from "@/scripts/vuex/status";

const loadBar = {
    start: () => {
        store.commit("loading", true)
    },
    stop: () => {
        store.commit("loading", false)
    }
}

export default loadBar