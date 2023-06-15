import axios from "axios";
import settings from "@/settings";
import mdui from "mdui";
import store from "@/scripts/vuex/store";

const userdata = {
    req: () => {
        const instance = axios.create({
            baseURL: settings.system.server,
            timeout: 10000
        });

        instance.get("/user/info/simple")
        .then((response) => {
            console.log(response)
            store.commit("__user", response)
        })
        .catch((error) => {
            console.error("无法请求数据：\n" + error)
            mdui.snackbar({
                message: "无法请求数据: " + error.message
            })
        })
    }
}

export default userdata