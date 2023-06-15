import axios from "axios";
import settings from "@/settings";
import mdui from "mdui";
import store from "@/scripts/vuex/store";

const instance = axios.create({
    baseURL: settings.system.server,
    timeout: 10000
});

const userdata = {
    req: () => {
        instance.get("/user/info")
        .then((response) => {
            console.log(response)
            if (response.data.status) {
                const result = {
                    name: response.data.info.name,
                    mail: response.data.info.mail,
                    avatar: store.getters.__config.settings.system.yggdrasil_root + "/avatar/player/" + response.data.info.name
                }
                store.commit("ref_user", result)
            }
        })
        .catch((error) => {
            console.error("无法请求数据：\n" + error)
            mdui.snackbar({
                message: "无法请求数据: " + error.message
            })
        })
    },
    getToken: () => {
        console.log(store.getters.mcskinCode)
        instance.post("/auth/token", {
            code: store.getters.mcskinCode
        },{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((response) => {
            if (response.data.status) {
                store.commit("mcskinX", response.data.token)
                console.log("Token: " + response.data.token)
                mdui.snackbar({
                    message: "授权成功，欢迎回来！"
                })
                setTimeout(window.location = "/", 3000)
            } else {
                mdui.snackbar({
                    message: "授权失败: " + response.data.message
                })
                setTimeout(window.location = "/auth/login?error=" + response.data.message, 3000)
            }
        })
        .catch((error) => {
            console.error("无法请求数据：\n" + error)
            mdui.snackbar({
                message: "无法请求数据: " + error.message
            })
            setTimeout(window.location = "/auth/login?error=" + error.message, 3000)
        })
    }
}

export default userdata